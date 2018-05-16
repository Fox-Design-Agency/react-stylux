'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

require('../css/reset.css');

require('../css/animations.css');

var _modalFunctions = require('./togglerFunctions/modalFunctions');

var _modalFunctions2 = _interopRequireDefault(_modalFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.state = {
            show: false,
            id: props.id,
            className: props.className,
            first: '',
            childs: [],
            keys: '',
            styledModal: '',
            box: props.box
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledModal = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var first = CHILDS.shift();
            var tempKeys = [];
            for (var i = 0; i <= CHILDS; i++) {
                tempKeys.push(tempKeys[i] = Math.random());
            }
            if (this.state.box === "1") {
                use = (0, _modalFunctions2.default)("1", props, state, self);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, onClick: this.toggle },
                        first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.BOXSTYLES },
                        _react2.default.createElement(
                            'button',
                            { style: use.BTNSTYLE, onClick: this.toggle },
                            'X'
                        ),
                        CHILDS
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _modalFunctions2.default)("2", props, state, self);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: tempKeys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'span',
                                { style: use.CLOSEBTN, onClick: this.toggle },
                                '\xD7'
                            ),
                            CHILDS
                        )
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _modalFunctions2.default)("3", props, state, self);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: tempKeys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALHEADER },
                                _react2.default.createElement(
                                    'span',
                                    { style: use.CLOSEBTN, onClick: this.toggle },
                                    '\xD7'
                                ),
                                CHILDS[0]
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALBODY },
                                CHILDS[1]
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALFOOTER },
                                CHILDS[2]
                            )
                        )
                    )
                )];
            } else {
                use = (0, _modalFunctions2.default)("2", props, state, self);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: tempKeys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'span',
                                { style: use.CLOSEBTN, onClick: this.toggle },
                                '\xD7'
                            ),
                            CHILDS
                        )
                    )
                )];
            }

            this.setState({ first: first, childs: CHILDS, styledModal: styledModal, keys: tempKeys });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = this.props;
            var state = this.state;
            var styledModal = void 0,
                use = '';
            var self = this;
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            var first = CHILDS.shift();
            if (this.state.box === "1") {
                use = (0, _modalFunctions2.default)("1", props, state, self);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys, id: this.state.id, className: this.state.className },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, onClick: this.toggle },
                        first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.BOXSTYLES },
                        _react2.default.createElement(
                            'button',
                            { style: use.BTNSTYLE, onClick: this.toggle },
                            'X'
                        ),
                        CHILDS
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _modalFunctions2.default)("2", props, state, self);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'span',
                                { style: use.CLOSEBTN, onClick: this.toggle },
                                '\xD7'
                            ),
                            CHILDS
                        )
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _modalFunctions2.default)("3", props, state, self);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALHEADER },
                                _react2.default.createElement(
                                    'span',
                                    { style: use.CLOSEBTN, onClick: this.toggle },
                                    '\xD7'
                                ),
                                CHILDS[0]
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALBODY },
                                CHILDS[1]
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALFOOTER },
                                CHILDS[2]
                            )
                        )
                    )
                )];
            } else {
                use = (0, _modalFunctions2.default)("2", props, state, self);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'span',
                                { style: use.CLOSEBTN, onClick: this.toggle },
                                '\xD7'
                            ),
                            CHILDS
                        )
                    )
                )];
            }

            return this.setState({ first: first, childs: CHILDS, styledModal: styledModal });
        }
    }, {
        key: 'toggle',
        value: function toggle() {
            var props = this.props;
            var state = this.state;
            var styledModal = void 0,
                use = '';
            var self = this;
            var show = !this.state.show;
            if (this.state.box === "1") {
                use = (0, _modalFunctions2.default)("1", props, state, self, show);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys },
                    _react2.default.createElement(
                        'div',
                        { style: use.CLICKBOX, id: this.state.titleid, className: this.state.titleClassName, onClick: this.toggle },
                        this.state.first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.BOXSTYLES, id: this.state.boxId, className: this.state.boxClassName },
                        _react2.default.createElement(
                            'button',
                            { style: use.BTNSTYLE, id: this.state.btnId, className: this.state.btnClassName, onClick: this.toggle },
                            'X'
                        ),
                        this.state.childs
                    )
                )];
            } else if (this.state.box === "2") {
                use = (0, _modalFunctions2.default)("2", props, state, self, show);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        this.state.first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'span',
                                { style: use.CLOSEBTN, onClick: this.toggle },
                                '\xD7'
                            ),
                            this.state.childs
                        )
                    )
                )];
            } else if (this.state.box === "3") {
                use = (0, _modalFunctions2.default)("3", props, state, self, show);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        this.state.first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALHEADER },
                                _react2.default.createElement(
                                    'span',
                                    { style: use.CLOSEBTN, onClick: this.toggle },
                                    '\xD7'
                                ),
                                this.state.childs[0]
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALBODY },
                                this.state.childs[1]
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: use.MODALFOOTER },
                                this.state.childs[2]
                            )
                        )
                    )
                )];
            } else {
                use = (0, _modalFunctions2.default)("2", props, state, self, show);
                styledModal = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys },
                    _react2.default.createElement(
                        'div',
                        { style: use.OPENERBTN, onClick: this.toggle },
                        this.state.first
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: use.MODAL, onClick: this.toggle },
                        _react2.default.createElement(
                            'div',
                            { style: use.MODALCONTENT },
                            _react2.default.createElement(
                                'span',
                                { style: use.CLOSEBTN, onClick: this.toggle },
                                '\xD7'
                            ),
                            this.state.childs
                        )
                    )
                )];
            }
            this.setState({
                show: !this.state.show,
                styledModal: styledModal
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledModal
            );
        }
    }]);

    return Modal;
}(_react2.default.Component);

exports.default = Modal;