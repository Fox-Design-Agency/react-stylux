"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = dropdownnavFunction;
function dropdownnavFunction(type, props, state, self) {
    var cursor = void 0,
        show = "";

    switch (type) {
        case '1':
            cursor = "pointer";
            show = arguments[4] || "hidden";
            return {
                DROPDOWN: {
                    position: 'absolute',
                    visibility: show,
                    borderRadius: state.borderRadius,
                    boxShadow: state.boxShadow,
                    margin: "0 0 0 " + state.offset,
                    width: state.width,
                    padding: '5px',
                    textAlign: state.textAlign,
                    flex: "1 0 auto",
                    background: state.background,
                    zIndex: "1000",
                    color: state.color,
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode
                },

                HASCHILDS: {
                    fontSize: '1em',
                    color: state.color,
                    cursor: 'default'
                }
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