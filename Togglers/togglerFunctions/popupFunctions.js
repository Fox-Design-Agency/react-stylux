"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = popupFunction;
function popupFunction(type, props, state, self) {
    var cursor = "";
    var visibility = arguments[4];
    switch (type) {
        case '1':
            cursor = "pointer";
            return {
                POPUPCLICK: {
                    cursor: 'pointer'
                },
                POPUPSTYLE: {
                    visibility: visibility ? "visible" : "hidden",
                    backgroundColor: '#333',
                    minWidth: '250px',
                    color: '#fff',
                    textAlign: 'center',
                    borderRadius: '2px',
                    padding: '16px',
                    position: 'fixed',
                    // zIndex: '1',
                    // left: '50%',
                    bottom: '30px'
                }

            };
        case '2':
            cursor = "pointer";
            return {
                POPUPCLICK: {
                    cursor: 'pointer'
                },
                POPUPSTYLE: {
                    visibility: visibility ? "visible" : "hidden",

                    backgroundColor: '#333',
                    minWidth: '250px',
                    color: '#fff',
                    textAlign: 'center',
                    borderRadius: '2px',
                    padding: '16px',
                    position: 'absolute'
                    // zIndex: '1',
                    // left: '50%',
                }

            };
        default:
            return;
    }
}