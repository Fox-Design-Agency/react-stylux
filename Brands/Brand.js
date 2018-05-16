'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _Image = require('../Images/Image');

var _Image2 = _interopRequireDefault(_Image);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _brandFunctions = require('./brandFunctions/brandFunctions');

var _brandFunctions2 = _interopRequireDefault(_brandFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Brand = function (_React$Component) {
    _inherits(Brand, _React$Component);

    function Brand(props) {
        _classCallCheck(this, Brand);

        var _this = _possibleConstructorReturn(this, (Brand.__proto__ || Object.getPrototypeOf(Brand)).call(this, props));

        _this.state = {
            size: props.size || 'tn',
            childs: [],
            id: props.id,
            className: props.className,
            box: props.box,
            vars: props.vars,
            styledBrand: '',
            keys: ''
        };
        return _this;
    }

    _createClass(Brand, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledBrand = void 0,
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
                            use = (0, _brandFunctions2.default)("1", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.brand_name },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdbrand_name },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smbrand_name },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:
                            use = (0, _brandFunctions2.default)("1", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.brand_name },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdbrand_name },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smbrand_name },
                                        CHILDS[1]
                                    )
                                )
                            )];
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("2", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                        default:
                            use = (0, _brandFunctions2.default)("2", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("3", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                        default:
                            use = (0, _brandFunctions2.default)("3", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("4", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                        default:
                            use = (0, _brandFunctions2.default)("4", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("5", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            )];
                        default:
                            use = (0, _brandFunctions2.default)("5", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: tempkeys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _brandFunctions2.default)("2", props, state, self);
                    styledBrand = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { style: use.brand,
                                id: this.state.id,
                                className: this.state.className },
                            _react2.default.createElement(
                                _Image2.default,
                                {
                                    box: '5',
                                    size: this.state.size },
                                CHILDS[0],
                                'logo'
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.mdbrand,
                                id: this.state.id,
                                className: this.state.className },
                            _react2.default.createElement(
                                _Image2.default,
                                {
                                    box: '5',
                                    size: this.state.size },
                                CHILDS[0],
                                'logo'
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: tempkeys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.smbrand,
                                id: this.state.id,
                                className: this.state.className },
                            _react2.default.createElement(
                                _Image2.default,
                                {
                                    box: '5',
                                    size: this.state.size },
                                CHILDS[0],
                                'logo'
                            )
                        )
                    )];
            }
            return this.setState({ childs: CHILDS, styledBrand: styledBrand, keys: tempkeys });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledBrand = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("1", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.brand_name },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.mdbrand_name },
                                        CHILDS[1]
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    ),
                                    _react2.default.createElement(
                                        'p',
                                        { style: use.smbrand_name },
                                        CHILDS[1]
                                    )
                                )
                            )];
                        default:

                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("2", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '5',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                        default:

                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("3", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                        default:

                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("4", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    _react2.default.createElement(
                                        _Image2.default,
                                        {
                                            box: '4',
                                            size: this.state.size },
                                        CHILDS[0],
                                        'logo'
                                    )
                                )
                            )];
                        default:

                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _brandFunctions2.default)("5", props, state, self);
                            styledBrand = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 1224 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.brand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[2], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smbrand,
                                        id: this.state.id,
                                        className: this.state.className },
                                    CHILDS
                                )
                            )];
                        default:

                    }
                    break;
                default:
                    use = (0, _brandFunctions2.default)("2", props, state, self);
                    styledBrand = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 1224 },
                        _react2.default.createElement(
                            'div',
                            { style: use.brand,
                                id: this.state.id,
                                className: this.state.className },
                            _react2.default.createElement(
                                _Image2.default,
                                {
                                    box: '5',
                                    size: this.state.size },
                                CHILDS[0],
                                'logo'
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[1], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.mdbrand,
                                id: this.state.id,
                                className: this.state.className },
                            _react2.default.createElement(
                                _Image2.default,
                                {
                                    box: '5',
                                    size: this.state.size },
                                CHILDS[0],
                                'logo'
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[2], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.smbrand,
                                id: this.state.id,
                                className: this.state.className },
                            _react2.default.createElement(
                                _Image2.default,
                                {
                                    box: '5',
                                    size: this.state.size },
                                CHILDS[0],
                                'logo'
                            )
                        )
                    )];
            }
            return this.setState({ childs: CHILDS, styledBrand: styledBrand });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledBrand
            );
        }
    }]);

    return Brand;
}(_react2.default.Component);

exports.default = Brand;