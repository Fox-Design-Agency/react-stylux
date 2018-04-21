'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _nestingstyles = require('nestingstyles');

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HR = function (_Component) {
    _inherits(HR, _Component);

    function HR(props) {
        _classCallCheck(this, HR);

        var _this = _possibleConstructorReturn(this, (HR.__proto__ || Object.getPrototypeOf(HR)).call(this, props));

        _this.state = {
            width: props.width || '100%',
            height: props.height || '5px',
            background: props.background || 'black',
            padding: props.padding,
            margin: props.margin || '5px 0px 5px 0px',
            bLeft: props.bLeft,
            bRight: props.bRight,
            bTop: props.bTop,
            bBottom: props.bBottom,
            border: props.border,
            id: props.id,
            transform: props.transform,
            transformOrigin: props.transformOrigin

        };
        return _this;
    }

    _createClass(HR, [{
        key: 'render',
        value: function render() {
            var STYLES = {
                width: this.state.width,
                height: this.state.height,
                background: this.state.background,
                borderLeft: this.state.bLeft,
                borderRight: this.state.bRight,
                borderTop: this.state.bTop,
                borderBottom: this.state.bBottom,
                border: this.state.border,
                transform: this.state.transform,
                transformOrigin: this.state.transformOrigin
            };

            return _react2.default.createElement('hr', { style: STYLES, id: this.state.id });
        }
    }]);

    return HR;
}(_react.Component);

exports.default = HR;