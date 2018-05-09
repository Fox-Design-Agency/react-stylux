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

var _tableFunctions = require('./tableFunctions/tableFunctions');

var _tableFunctions2 = _interopRequireDefault(_tableFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table(props) {
        _classCallCheck(this, Table);

        var _this = _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).call(this, props));

        _this.state = {
            columns: props.columns || 3,
            rows: props.rows || 3,
            head: props.head,
            body: props.body,
            tableid: props.tableId,
            mainid: props.mainId,
            mainClassName: props.mainClassName,
            tableClassName: props.tableClassName,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            headBorderTop: props.hbordertop,
            headBorderRight: props.hborderRight,
            headBorderBottom: props.hborderBottom,
            headBorderLeft: props.hborderLeft,
            headBorder: props.hborder || '1px solid black',
            headVertical: props.hvertical || 'center',
            headWidth: props.headWidth,
            headHeight: props.headHeight,
            headMargin: props.headMargin,
            headPadding: props.headPadding || '5px',
            dBorderTop: props.dbordertop,
            dBorderRight: props.dborderRight,
            dBorderBottom: props.dborderBottom,
            dBorderLeft: props.dborderLeft,
            dBorder: props.dborder || '1px solid black',
            dVertical: props.dVertical || 'center',
            dwidth: props.dwidth,
            dheight: props.dheight,
            dmargin: props.dmargin,
            dpadding: props.dpadding || '5px',
            tableBorderTop: props.tbordertop,
            tableBorderRight: props.tborderRight,
            tableBorderBottom: props.tborderBottom,
            tableBorderLeft: props.tborderLeft,
            tableBorder: props.tborder || '1px solid black',
            tableMargin: props.tmargin || '5px',
            tablePadding: props.tpadding,
            tableWidth: props.tableWidth,
            tableHeight: props.tableHeight,
            tableBorderCollapse: props.borderCollaspe || 'collapse',
            box: props.box,
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
            var TABLEHEAD = _nestingstyles2.default.create({
                tablehead: {
                    borderTop: this.state.headBorderTop,
                    borderRight: this.state.headBorderRight,
                    borderBottom: this.state.headBorderBottom,
                    borderLeft: this.state.headBorderLeft,
                    border: this.state.headBorder,
                    margin: this.state.headMargin,
                    padding: this.state.headPadding,
                    textAlign: 'center',
                    width: this.state.headWidth,
                    height: this.state.headHeight

                },
                '@media screen and (max-width: 768px)': {
                    tablehead: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    tablehead: {
                        display: this.state.mdDis
                    }
                }
            });
            var TABLEBODY = _nestingstyles2.default.create({
                tablebody: {
                    borderTop: this.state.dBorderTop,
                    borderRight: this.state.dBorderRight,
                    borderBottom: this.state.dBorderBottom,
                    borderLeft: this.state.dBorderLeft,
                    border: this.state.dBorder,
                    margin: this.state.dMargin,
                    padding: this.state.dPadding,
                    textAlign: 'center',
                    width: this.state.dWidth,
                    height: this.state.dHeight

                },
                '@media screen and (max-width: 768px)': {
                    tablebody: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    tablebody: {
                        display: this.state.mdDis
                    }
                }
            });

            var CHILDS = _react2.default.Children.count(this.props.children) === 0 ? '' : _react2.default.Children.toArray(this.props.children);
            var tempKeys = [0.23154];

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
                                { key: i, style: TABLEHEAD.tablehead },
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
                                { key: i, style: TABLEBODY.tablebody },
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
            if (this.state.box === '1') {
                use = (0, _tableFunctions2.default)("1", props, state, self);
                styledTable = [_react2.default.createElement(
                    'div',
                    { key: tempKeys[0], style: use.TABLERES.tableres, id: this.state.mainId, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'table',
                        { style: use.TABLESTYLE.tablestyle, id: this.state.tableId, className: this.state.tableClassName },
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
                )];
            } else {
                use = (0, _tableFunctions2.default)("1", props, state, self);
                styledTable = [_react2.default.createElement(
                    'div',
                    { key: tempKeys[0], style: use.TABLERES.tableres, id: this.state.mainId, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'table',
                        { style: use.TABLESTYLE.tablestyle, id: this.state.tableId, className: '' + this.state.tableClassName },
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
            var TABLEHEAD = _nestingstyles2.default.create({
                tablehead: {
                    borderTop: this.state.headBorderTop,
                    borderRight: this.state.headBorderRight,
                    borderBottom: this.state.headBorderBottom,
                    borderLeft: this.state.headBorderLeft,
                    border: this.state.headBorder,
                    margin: this.state.headMargin,
                    padding: this.state.headPadding,
                    textAlign: 'center',
                    width: this.state.headWidth,
                    height: this.state.headHeight

                },
                '@media screen and (max-width: 768px)': {
                    tablehead: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    tablehead: {
                        display: this.state.mdDis
                    }
                }
            });

            var TABLEBODY = _nestingstyles2.default.create({
                tablebody: {
                    borderTop: this.state.dBorderTop,
                    borderRight: this.state.dBorderRight,
                    borderBottom: this.state.dBorderBottom,
                    borderLeft: this.state.dBorderLeft,
                    border: this.state.dBorder,
                    margin: this.state.dMargin,
                    padding: this.state.dPadding,
                    textAlign: 'center',
                    width: this.state.dWidth,
                    height: this.state.dHeight

                },
                '@media screen and (max-width: 768px)': {
                    tablebody: {
                        display: this.state.smDis
                    }
                },
                '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                    tablebody: {
                        display: this.state.mdDis
                    }
                }
            });
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
                                { key: i, style: TABLEHEAD.tablehead },
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
                                { key: i, style: TABLEBODY.tablebody },
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
            if (this.state.box === '1') {
                use = (0, _tableFunctions2.default)("1", props, state, self);
                styledTable = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: use.TABLERES.tableres, id: this.state.mainId, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'table',
                        { style: use.TABLESTYLE.tablestyle, id: this.state.tableId, className: this.state.tableClassName },
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
                )];
            } else {
                use = (0, _tableFunctions2.default)("1", props, state, self);
                styledTable = [_react2.default.createElement(
                    'div',
                    { key: this.state.keys[0], style: use.TABLERES.tableres, id: this.state.mainId, className: this.state.mainClassName },
                    _react2.default.createElement(
                        'table',
                        { style: use.TABLESTYLE.tablestyle, id: this.state.tableId, className: '' + this.state.tableClassName },
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
}(_react.Component);

exports.default = Table;