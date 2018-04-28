'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberList3 = function (_Component) {
    _inherits(NumberList3, _Component);

    function NumberList3(props) {
        _classCallCheck(this, NumberList3);

        var _this = _possibleConstructorReturn(this, (NumberList3.__proto__ || Object.getPrototypeOf(NumberList3)).call(this, props));

        _this.state = {
            listItem: [],
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'upper-roman',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            id: props.id,
            className: props.className,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            width: props.width || "100%"
        };
        return _this;
    }

    _createClass(NumberList3, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var listItems = [];
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            listItems = CHILDS.map(function (x) {
                return x;
            });
            this.setState({ listItem: listItems });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var listItems = [];
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            listItems = CHILDS.map(function (x) {
                return x;
            });
            this.setState({ listItem: listItems });
        }
    }, {
        key: 'render',
        value: function render() {
            var LISTSTYLE = _nestingstyles2.default.create({
                liststyle: {
                    color: this.state.color,
                    fontFamily: this.state.fontFamily,
                    fontSize: this.state.fontSize,
                    lineHeight: this.state.lineHeight,
                    fontWeight: this.state.fontWeight,
                    paddingLeft: this.state.paddingLeft,
                    listStyleType: this.state.listStyleType,
                    listStyleImage: this.state.listStyleImage,
                    listStylePosition: this.state.listStylePosition,
                    width: this.state.width

                },
                '@media screen and (max-width: 768px)': {
                    liststyle: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    liststyle: {
                        display: this.state.mdDis
                    }
                }
            });
            var LISTITEMSTYLE = _nestingstyles2.default.create({
                listitemstyle: {
                    paddingLeft: this.state.itemPadding,
                    backgroundImage: this.state.itemBGImage,
                    backgroundPosition: this.state.itemBGPosition,
                    backgroundSize: this.state.itemBGSize,
                    backgroundRepeat: 'no-repeat'
                },
                '@media screen and (max-width: 768px)': {
                    listitemstyle: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    listitemstyle: {
                        display: this.state.mdDis
                    }
                }
            });
            var LIST = this.state.listItem.map(function (x, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: LISTITEMSTYLE.listitemstyle },
                    x
                );
            });
            return _react2.default.createElement(
                'ol',
                { style: LISTSTYLE.liststyle, id: this.state.id, className: this.state.className },
                LIST
            );
        }
    }]);

    return NumberList3;
}(_react.Component);

exports.default = NumberList3;