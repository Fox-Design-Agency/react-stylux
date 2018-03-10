'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

require('../css/SuperStyleSheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toggler4 = function (_Component) {
    _inherits(Toggler4, _Component);

    function Toggler4(props) {
        _classCallCheck(this, Toggler4);

        var _this = _possibleConstructorReturn(this, (Toggler4.__proto__ || Object.getPrototypeOf(Toggler4)).call(this, props));

        _this.state = {
            show: true,
            width: props.width || '400px',
            height: props.height,
            background: props.background || 'white',
            buttonText: props.buttonText || 'toggler2',
            position: props.position,
            textvertical: props.textVertical || 'center',
            texthorizontal: props.textHorizontal || 'center',
            textheight: props.textHeight || '200px',
            textwidth: props.textWidth || '300px',
            boxBorderLeft: props.boxBorderLeft,
            boxBorderRight: props.boxBorderRight,
            boxBorderTop: props.boxBorderTop,
            boxBorderBottom: props.boxBorderBottom,
            boxBorder: props.boxBorder || '1px solid black',
            boxMargin: props.boxMArgin || '5px',
            labels: [],
            text: [],
            mainid: props.mainid,
            toggleid: props.toggleid,
            panelClassName: props.panelClassName,
            mainClassName: props.mainClassName,
            toggleClassName: props.toggleClassName,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex'
        };
        return _this;
    }

    _createClass(Toggler4, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var labels = [];
            var text = [];
            for (var i = 0; i < CHILDS.length; i += 1) {
                if ((i + 1) % 2 === 0) {
                    text.push(CHILDS[i]);
                } else {
                    labels.push(CHILDS[i]);
                }
            }
            this.setState({
                labels: labels,
                text: text
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var CHILDS = _react2.default.Children.toArray(newProps.children);
            var labels = [];
            var text = [];
            for (var i = 0; i < CHILDS.length; i += 1) {
                if ((i + 1) % 2 === 0) {
                    text.push(CHILDS[i]);
                } else {
                    labels.push(CHILDS[i]);
                }
            }
            this.setState({
                labels: labels,
                text: text
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var CHECKSSTYLE = {
                display: "none"
            };
            var PANELS = {
                display: 'flex',
                flex: 1,
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                position: this.state.position,
                width: this.state.width,
                height: this.state.height,
                background: this.state.background,
                top: this.state.top,
                overflow: 'hidden'
            };
            var TEXTBOX = {
                height: this.state.textheight,
                width: this.state.textwidth,
                display: 'flex',
                flexDirection: 'column',
                alignItems: this.state.texthorizontal,
                justifyContent: this.state.textvertical,
                margin: this.state.boxMargin,
                borderLeft: this.state.borderLeft,
                borderRight: this.state.borderRight,
                borderTop: this.state.borderTop,
                borderBottom: this.state.borderBottom,
                border: this.state.boxBorder
            };
            var LABELSSTYLES = {
                cursor: 'pointer',
                borderTop: '1px solid black',
                borderLeft: '1px solid black',
                margin: '3px',
                padding: '5px',
                width: '150px',
                trasition: '0.3s'
            };
            var LABELTITLES = {
                display: 'flex',
                flexDirection: 'column'

            };

            var CHECKS = this.state.labels.map(function (x, i, arr) {
                return _react2.default.createElement('input', { key: i, id: 'Vtab' + (i + 1), type: 'radio', name: 'Vpanel_select', defaultChecked: true, style: CHECKSSTYLE });
            });
            var LABELS = this.state.labels.map(function (x, i, arr) {
                return _react2.default.createElement(
                    'label',
                    { key: i, style: LABELSSTYLES, htmlFor: 'Vtab' + (i + 1) },
                    x
                );
            });
            var TEXT = this.state.text.map(function (x, i, arr) {
                return _react2.default.createElement(
                    'div',
                    { key: i, id: 'Vpanel' + (i + 1), className: _this2.state.panelClassName },
                    _react2.default.createElement(
                        'p',
                        { style: TEXTBOX },
                        x
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { style: PANELS, id: this.state.mainid, className: 'vpanels ' + this.state.mainClassName },
                CHECKS,
                _react2.default.createElement(
                    'nav',
                    { style: LABELTITLES, id: this.state.toggleid, className: this.state.toggleClassName },
                    LABELS
                ),
                TEXT
            );
        }
    }]);

    return Toggler4;
}(_react.Component);

exports.default = Toggler4;