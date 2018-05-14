"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = navbarFunction;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function navbarFunction(type, props, state, self) {
    var _hamestnav, _smhamestnav, _mdhamestnav;

    var cursor = void 0,
        smdis = void 0,
        show = void 0,
        display = "";

    switch (type) {
        case '1':
            cursor = "pointer";
            smdis = state.smdis || arguments[4];
            show = arguments[5];
            return {
                navbar: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color

                },
                smnavbar: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color

                },
                mdnavbar: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color
                },
                navbar_navbar: {
                    width: state.navBarWidth,
                    height: 'inherit',
                    display: state.display,
                    flexWrap: 'wrap',
                    flex: "1 0 auto",
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                    top: state.top,
                    right: state.right,
                    left: state.left,
                    bottom: state.bottom,
                    position: state.position,
                    zIndex: 200
                },
                smnavbar_navbar: {
                    display: smdis

                },
                mdnavbar_navbar: {
                    display: state.mddis
                },
                HAMNAV: {
                    width: '50px',
                    height: '50px',
                    display: state.hamMenuDis,
                    flex: "1 0 auto",
                    cursor: 'pointer',
                    flexDirection: 'column'

                },
                '@media screen and (max-width: 768px)': {
                    smHAMNAV: {
                        width: '50px',
                        height: '50px',
                        display: state.hamSmDis,
                        flex: "1 0 auto",
                        cursor: 'pointer',
                        flexDirection: 'column'

                    },
                    mdHAMNAV: {
                        width: '50px',
                        height: '50px',
                        display: state.hamMdDis,
                        flex: "1 0 auto",
                        cursor: 'pointer',
                        flexDirection: 'column'
                    },
                    HAMLINES: {
                        display: 'flex',
                        flex: "1 0 auto",
                        width: '25px',
                        height: '5px',
                        backgroundColor: 'black',
                        margin: '3px 0'
                    },
                    hamestnav: (_hamestnav = {
                        visibility: 'hidden',
                        width: '100%',
                        flexDirection: 'column',
                        position: state.hamPosition,
                        top: state.hamTop,
                        left: state.hamLeft,
                        background: state.hamBackground,
                        display: 'flex',
                        flex: "1 0 auto"
                    }, _defineProperty(_hamestnav, "flexDirection", 'column'), _defineProperty(_hamestnav, "alignItems", 'center'), _defineProperty(_hamestnav, "boxShadow", state.hamShadow), _defineProperty(_hamestnav, "animationIterationCount", state.animationIterationCount), _defineProperty(_hamestnav, "animationTimingFunction", state.animationTimingFunction), _defineProperty(_hamestnav, "animationName", state.animationName), _defineProperty(_hamestnav, "animationDuration", state.animationDuration), _defineProperty(_hamestnav, "transformOrigin", state.transformOrigin), _defineProperty(_hamestnav, "animationFillMode", state.animationFillMode), _hamestnav),
                    smhamestnav: (_smhamestnav = {
                        visibility: show ? 'visible' : 'hidden',
                        width: '100%',
                        flexDirection: 'column',
                        position: state.hamPosition,
                        top: state.hamTop,
                        left: state.hamLeft,
                        background: state.hamBackground,
                        display: 'flex',
                        flex: "1 0 auto"
                    }, _defineProperty(_smhamestnav, "flexDirection", 'column'), _defineProperty(_smhamestnav, "alignItems", 'center'), _defineProperty(_smhamestnav, "boxShadow", state.hamShadow), _defineProperty(_smhamestnav, "animationIterationCount", state.animationIterationCount), _defineProperty(_smhamestnav, "animationTimingFunction", state.animationTimingFunction), _defineProperty(_smhamestnav, "animationName", state.animationName), _defineProperty(_smhamestnav, "animationDuration", state.animationDuration), _defineProperty(_smhamestnav, "transformOrigin", state.transformOrigin), _defineProperty(_smhamestnav, "animationFillMode", state.animationFillMode), _smhamestnav)
                },
                mdhamestnav: (_mdhamestnav = {
                    visibility: show ? 'visible' : 'hidden',
                    width: '100%',
                    flexDirection: 'column',
                    position: state.hamPosition,
                    top: state.hamTop,
                    left: state.hamLeft,
                    background: state.hamBackground,
                    display: 'flex',
                    flex: "1 0 auto"
                }, _defineProperty(_mdhamestnav, "flexDirection", 'column'), _defineProperty(_mdhamestnav, "alignItems", 'center'), _defineProperty(_mdhamestnav, "boxShadow", state.hamShadow), _defineProperty(_mdhamestnav, "animationIterationCount", state.animationIterationCount), _defineProperty(_mdhamestnav, "animationTimingFunction", state.animationTimingFunction), _defineProperty(_mdhamestnav, "animationName", state.animationName), _defineProperty(_mdhamestnav, "animationDuration", state.animationDuration), _defineProperty(_mdhamestnav, "transformOrigin", state.transformOrigin), _defineProperty(_mdhamestnav, "animationFillMode", state.animationFillMode), _mdhamestnav)
                // case (type = '2'):
                //     cursor = "pointer"
                //     return {

                //     }
                // case (type = '3'):
                //     cursor = "pointer"
                //     return {


                //     }
                // case (type = '4'):
                //     cursor = "pointer"
                //     return {


                //     }
                // case (type = '5'):
                //     cursor = "pointer"
                //     return {


                //     }
            };default:
            return;
    }
}