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

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

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
            display: props.display || 'flex',
            direction: props.direction || 'row',
            size: props.size || 'tn',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            childs: [],
            id: props.id,
            className: props.className,
            type: props.type,
            styledBrand: ''
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
            if (this.state.type === "1") {
                use = (0, _brandFunctions2.default)("1", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'square',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    ),
                    _react2.default.createElement(
                        'p',
                        { style: use.BRAND.brand_name },
                        CHILDS[1]
                    )
                )];
            } else if (this.state.type === "2") {
                use = (0, _brandFunctions2.default)("2", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'rectangle',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    )
                )];
            } else if (this.state.type === "3") {
                use = (0, _brandFunctions2.default)("3", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'square',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    )
                )];
            } else if (this.state.type === "4") {
                use = (0, _brandFunctions2.default)("4", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'square',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    )
                )];
            } else if (this.state.type === "5") {
                use = (0, _brandFunctions2.default)("5", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    CHILDS
                )];
            } else {
                use = (0, _brandFunctions2.default)("custom", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'square',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    ),
                    _react2.default.createElement(
                        'p',
                        { style: use.BRAND.brand_name },
                        CHILDS[1]
                    )
                )];
            }
            return this.setState({ childs: CHILDS, styledBrand: styledBrand });
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
            if (this.state.type === "1") {
                use = (0, _brandFunctions2.default)("1", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'square',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    ),
                    _react2.default.createElement(
                        'p',
                        { style: use.BRAND.brand_name },
                        CHILDS[1]
                    )
                )];
            } else if (this.state.type === "2") {
                use = (0, _brandFunctions2.default)("2", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'rectangle',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    )
                )];
            } else if (this.state.type === "3") {
                use = (0, _brandFunctions2.default)("3", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'square',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    )
                )];
            } else if (this.state.type === "4") {
                use = (0, _brandFunctions2.default)("4", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'square',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    )
                )];
            } else if (this.state.type === "5") {
                use = (0, _brandFunctions2.default)("5", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    CHILDS
                )];
            } else {
                use = (0, _brandFunctions2.default)("custom", props, state, self);
                styledBrand = [_react2.default.createElement(
                    'div',
                    { key: Math.random(), style: use.BRAND.brand,
                        id: this.state.id,
                        className: this.state.className },
                    _react2.default.createElement(
                        _Image2.default,
                        {
                            type: 'square',
                            size: this.state.size },
                        CHILDS[0],
                        'logo'
                    ),
                    _react2.default.createElement(
                        'p',
                        { style: use.BRAND.brand_name },
                        CHILDS[1]
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