'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/reset.css');

require('../css/animations.css');

var _reactResponsive = require('react-responsive');

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _tableFunctions = require('./tableFunctions/tableFunctions');

var _tableFunctions2 = _interopRequireDefault(_tableFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_React$Component) {
    _inherits(Table, _React$Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            head: props.head,
            body: props.body,
            id: props.id,
            className: props.className,
            smdis: props.smDis,
            mddis: props.mdDis,
            box: props.box,
            vars: props.vars,
            keys: '',
            styledTable: ''

        };
        return _this;
    }

    _createClass(Table, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var props = this.props;
            var state = this.state;
            var styledTable = void 0,
                use = '';
            var self = this;
            var slides = [];
            var tempHead = [];
            var tempBody = [];
            var childs = [];
            var rows = this.state.rows;
            var HEADROW = void 0,
                HEAD = void 0,
                BODY = void 0;
            var BODYROW = [];
            var tablehead = {
                borderTop: props.hbordertop,
                borderRight: props.hborderRight,
                borderBottom: props.hborderBottom,
                borderLeft: props.hborderLeft,
                border: props.hborder || '1px solid black',
                margin: props.hvertical || 'center',
                padding: props.headPadding || '10px',
                textAlign: 'center',
                width: props.headWidth,
                height: props.headHeight

            };
            var tablebody = {
                borderTop: props.dbordertop,
                borderRight: props.dborderRight,
                borderBottom: props.dborderBottom,
                borderLeft: props.dborderLeft,
                border: props.dborder || '1px solid black',
                margin: props.dmargin,
                padding: props.dpadding || '5px',
                textAlign: 'center',
                width: props.dwidth,
                height: props.dheight
            };

            var CHILDS = _react2.default.Children.count(this.props.children) === 0 ? '' : _react2.default.Children.toArray(this.props.children);
            var tempKeys = [];
            for (var i = 0; i <= CHILDS.length; i++) {
                tempKeys.push(tempKeys[i] = Math.random());
            }
            if (CHILDS !== '') {
                childs = CHILDS.map(function (x, i, arr) {
                    return x;
                });
                for (var b = 1; b <= this.state.columns; b += 1) {
                    tempHead.push(childs[b - 1]);
                }
                childs.splice(0, this.state.columns);
                //need to divide by this.state.columns and make rows here
                tempBody = childs.map(function (x, i, arr) {
                    return x;
                });
                while (rows > 0) {
                    if (rows === this.state.rows) {
                        HEAD = tempHead.map(function (x, i, arr) {
                            return _react2.default.createElement(
                                'th',
                                { key: i, style: tablehead },
                                x
                            );
                        });
                        HEADROW = _react2.default.createElement(
                            'tr',
                            null,
                            HEAD
                        );
                    } else {
                        var temperBody = tempBody.splice(0, this.state.columns);
                        BODY = temperBody.map(function (x, i, arr) {
                            return _react2.default.createElement(
                                'td',
                                { key: i, style: tablebody },
                                x
                            );
                        });
                        BODYROW.push(_react2.default.createElement(
                            'tr',
                            { key: rows },
                            BODY
                        ));
                    }
                    rows -= 1;
                }
            }
            switch (this.state.box) {
                case '1':
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _tableFunctions2.default)("1", props, state, self);
                            styledTable = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.tableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.tablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdtableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.mdtablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smtableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.smtablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            )];
                        default:
                            use = (0, _tableFunctions2.default)("1", props, state, self);
                            styledTable = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.tableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.tablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdtableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.mdtablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smtableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.smtablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _tableFunctions2.default)("1", props, state, self);
                    styledTable = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement(
                            'div',
                            { style: use.tableres, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'table',
                                { style: use.tablestyle },
                                _react2.default.createElement(
                                    'thead',
                                    null,
                                    HEADROW
                                ),
                                _react2.default.createElement(
                                    'tbody',
                                    null,
                                    BODYROW
                                )
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.mdtableres, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'table',
                                { style: use.mdtablestyle },
                                _react2.default.createElement(
                                    'thead',
                                    null,
                                    HEADROW
                                ),
                                _react2.default.createElement(
                                    'tbody',
                                    null,
                                    BODYROW
                                )
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.smtableres, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'table',
                                { style: use.smtablestyle },
                                _react2.default.createElement(
                                    'thead',
                                    null,
                                    HEADROW
                                ),
                                _react2.default.createElement(
                                    'tbody',
                                    null,
                                    BODYROW
                                )
                            )
                        )
                    )];
            }
            this.setState({ head: HEADROW, body: BODYROW, styledTable: styledTable, keys: tempKeys });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var props = newProps;
            var state = this.state;
            var styledTable = void 0,
                use = '';
            var self = this;
            var tempHead = [];
            var tempBody = [];
            var childs = [];
            var rows = this.state.rows;
            var HEADROW = void 0,
                HEAD = void 0,
                BODY = void 0;
            var BODYROW = [];
            var tablehead = {
                borderTop: props.hbordertop,
                borderRight: props.hborderRight,
                borderBottom: props.hborderBottom,
                borderLeft: props.hborderLeft,
                border: props.hborder || '1px solid black',
                margin: props.hvertical || 'center',
                padding: props.headPadding || '10px',
                textAlign: 'center',
                width: props.headWidth,
                height: props.headHeight

            };
            var tablebody = {
                borderTop: props.dbordertop,
                borderRight: props.dborderRight,
                borderBottom: props.dborderBottom,
                borderLeft: props.dborderLeft,
                border: props.dborder || '1px solid black',
                margin: props.dmargin,
                padding: props.dpadding || '5px',
                textAlign: 'center',
                width: props.dwidth,
                height: props.dheight
            };
            var CHILDS = _react2.default.Children.count(newProps.children) === 0 ? '' : _react2.default.Children.toArray(newProps.children);
            if (CHILDS !== '') {
                childs = CHILDS.map(function (x, i, arr) {
                    return x;
                });
                for (var b = 1; b <= this.state.columns; b += 1) {
                    tempHead.push(childs[b - 1]);
                }
                childs.splice(0, this.state.columns);
                //need to divide by this.state.columns and make rows here
                tempBody = childs.map(function (x, i, arr) {
                    return x;
                });
                while (rows > 0) {
                    if (rows === this.state.rows) {
                        HEAD = tempHead.map(function (x, i, arr) {
                            return _react2.default.createElement(
                                'th',
                                { key: i, style: tablehead },
                                x
                            );
                        });
                        HEADROW = _react2.default.createElement(
                            'tr',
                            null,
                            HEAD
                        );
                    } else {
                        var temperBody = tempBody.splice(0, this.state.columns);
                        BODY = temperBody.map(function (x, i, arr) {
                            return _react2.default.createElement(
                                'td',
                                { key: i, style: tablebody },
                                x
                            );
                        });
                        BODYROW.push(_react2.default.createElement(
                            'tr',
                            { key: rows },
                            BODY
                        ));
                    }
                    rows -= 1;
                }
            }
            switch (this.state.box) {
                case '1':
                    switch (this.state.vars) {
                        case "1":
                            use = (0, _tableFunctions2.default)("1", props, state, self);
                            styledTable = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.tableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.tablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdtableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.mdtablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smtableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.smtablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            )];
                        default:
                            use = (0, _tableFunctions2.default)("1", props, state, self);
                            styledTable = [_react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], query: '(min-width: 1224px)' },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.tableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.tablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], minWidth: 768, maxWidth: 1223 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.mdtableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.mdtablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            ), _react2.default.createElement(
                                _reactResponsive2.default,
                                { key: this.state.keys[0], maxWidth: 767 },
                                _react2.default.createElement(
                                    'div',
                                    { style: use.smtableres, id: this.state.id, className: this.state.className },
                                    _react2.default.createElement(
                                        'table',
                                        { style: use.smtablestyle },
                                        _react2.default.createElement(
                                            'thead',
                                            null,
                                            HEADROW
                                        ),
                                        _react2.default.createElement(
                                            'tbody',
                                            null,
                                            BODYROW
                                        )
                                    )
                                )
                            )];
                    }
                    break;
                default:
                    use = (0, _tableFunctions2.default)("1", props, state, self);
                    styledTable = [_react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], query: '(min-width: 1224px)' },
                        _react2.default.createElement(
                            'div',
                            { style: use.tableres, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'table',
                                { style: use.tablestyle },
                                _react2.default.createElement(
                                    'thead',
                                    null,
                                    HEADROW
                                ),
                                _react2.default.createElement(
                                    'tbody',
                                    null,
                                    BODYROW
                                )
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], minWidth: 768, maxWidth: 1223 },
                        _react2.default.createElement(
                            'div',
                            { style: use.mdtableres, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'table',
                                { style: use.mdtablestyle },
                                _react2.default.createElement(
                                    'thead',
                                    null,
                                    HEADROW
                                ),
                                _react2.default.createElement(
                                    'tbody',
                                    null,
                                    BODYROW
                                )
                            )
                        )
                    ), _react2.default.createElement(
                        _reactResponsive2.default,
                        { key: this.state.keys[0], maxWidth: 767 },
                        _react2.default.createElement(
                            'div',
                            { style: use.smtableres, id: this.state.id, className: this.state.className },
                            _react2.default.createElement(
                                'table',
                                { style: use.smtablestyle },
                                _react2.default.createElement(
                                    'thead',
                                    null,
                                    HEADROW
                                ),
                                _react2.default.createElement(
                                    'tbody',
                                    null,
                                    BODYROW
                                )
                            )
                        )
                    )];
            }
            this.setState({ head: HEADROW, body: BODYROW, styledTable: styledTable });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.state.styledTable
            );
        }
    }]);

    return Table;
}(_react2.default.Component);

exports.default = Table;