"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = pullQuoteFunction;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function pullQuoteFunction(type, props, state, self) {
    var _mdcite, _mdcite2;

    var cursor = "";
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transform = props.transform;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis;
    var mddis = props.mdDis;
    switch (type) {
        case '1':
            cursor = "pointer";
            return _defineProperty({
                pullquotestyles: {
                    padding: "0px 12%",
                    margin: "20px 0 40px 0",
                    position: "relative"
                },
                cite: {
                    fontSize: "1.333em",
                    paddingLeft: "50px",
                    color: "lightslategray",
                    display: "block",
                    position: "absolute",
                    bottom: "-30px"
                },
                smpullquotestyles: {
                    display: smdis,
                    padding: "0px 12%",
                    margin: "20px 0 40px 0",
                    position: "relative"
                },
                mdcite: (_mdcite = {
                    display: smdis,
                    fontSize: "1.333em",
                    paddingLeft: "50px",
                    color: "lightslategray"
                }, _defineProperty(_mdcite, "display", "block"), _defineProperty(_mdcite, "position", "absolute"), _defineProperty(_mdcite, "bottom", "-30px"), _mdcite),
                mdpullquotestyles: {
                    display: mddis,
                    padding: "0px 12%",
                    margin: "20px 0 40px 0",
                    position: "relative"
                }
            }, "mdcite", (_mdcite2 = {
                display: mddis,
                fontSize: "1.333em",
                paddingLeft: "50px",
                color: "lightslategray"
            }, _defineProperty(_mdcite2, "display", "block"), _defineProperty(_mdcite2, "position", "absolute"), _defineProperty(_mdcite2, "bottom", "-30px"), _mdcite2));
        case '2':
            cursor = "pointer";
            return {
                pullquotestyles: {
                    width: "250px",
                    padding: "5px",
                    fontSize: "1.333em",
                    borderTop: "2px solid lightgray",
                    borderBottom: "2px solid lightgray",
                    margin: "0 auto"
                },
                text: {
                    fontSize: "1.333em",
                    margin: "5px"
                },
                cite: {
                    margin: "5px",
                    color: "lightslategray"
                },
                smpullquotestyles: {
                    display: smdis,
                    width: "250px",
                    padding: "5px",
                    fontSize: "1.333em",
                    borderTop: "2px solid lightgray",
                    borderBottom: "2px solid lightgray",
                    margin: "0 auto"
                },
                smtext: {
                    display: smdis,
                    fontSize: "1.333em",
                    margin: "5px"
                },
                smcite: {
                    display: smdis,
                    margin: "5px",
                    color: "lightslategray"

                },
                mdpullquotestyles: {
                    display: mddis,
                    width: "250px",
                    padding: "5px",
                    fontSize: "1.333em",
                    borderTop: "2px solid lightgray",
                    borderBottom: "2px solid lightgray",
                    margin: "0 auto"
                },
                mdtext: {
                    display: mddis,
                    fontSize: "1.333em",
                    margin: "5px"
                },
                mdcite: {
                    display: mddis,
                    margin: "5px",
                    color: "lightslategray"
                }
            };
        default:
            return;
    }
}