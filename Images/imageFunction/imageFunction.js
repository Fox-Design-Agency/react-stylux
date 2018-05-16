'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = imageFunction;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function imageFunction(type, size, props, state, self) {
    var _smimageStyles;

    var smimgHeight = void 0,
        smimgWidth = void 0,
        mdimgHeight = void 0,
        mdimgWidth = void 0,
        imgHeight = void 0,
        imgWidth = "";
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transform = props.transform;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';
    var margin = props.margin || '5px';
    var padding = props.padding;
    var boxShadow = props.shadow;
    var boxShadowRev = props.shadow;
    var hoverShadow = props.hovShadow;
    var display = props.display || "flex";

    switch (type) {
        case '1':
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "90px";
                imgHeight = "90px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "150px";
                imgHeight = "150px";
                mdimgWidth = "90px";
                mdimgHeight = "90px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "300px";
                mdimgWidth = "150px";
                mdimgHeight = "150px";
                smimgWidth = "90px";
                smimgHeight = "90px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "500px";
                mdimgWidth = "300px";
                mdimgHeight = "300px";
                smimgWidth = "150px";
                smimgHeight = "150px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "700px";
                mdimgWidth = "500px";
                mdimgHeight = "500px";
                smimgWidth = "300px";
                smimgHeight = "300px";
            }
            return {
                imageStyles: {
                    width: imgWidth,
                    height: imgHeight,
                    borderRadius: "100%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    display: display,
                    flex: "1"
                },
                hoverStyle: {
                    boxShadow: state.hoverShadow
                },
                smimageStyles: {
                    display: smdis,
                    width: smimgWidth,
                    height: smimgHeight,
                    borderRadius: "100%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"

                },
                mdimageStyles: _defineProperty({
                    display: mddis,
                    width: mdimgWidth,
                    height: mdimgHeight,
                    borderRadius: "100%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding
                }, 'display', display)
            };

        case "2":
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "90px";
                imgHeight = "90px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "150px";
                imgHeight = "150px";
                mdimgWidth = "90px";
                mdimgHeight = "90px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "300px";
                mdimgWidth = "150px";
                mdimgHeight = "150px";
                smimgWidth = "90px";
                smimgHeight = "90px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "500px";
                mdimgWidth = "300px";
                mdimgHeight = "300px";
                smimgWidth = "150px";
                smimgHeight = "150px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "700px";
                mdimgWidth = "500px";
                mdimgHeight = "500px";
                smimgWidth = "300px";
                smimgHeight = "300px";
            }
            return {
                imageStyles: {
                    width: imgWidth,
                    height: imgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    display: display,
                    flex: "1"
                },
                hoverStyle: {
                    boxShadow: hoverShadow
                },
                smimageStyles: {
                    display: smdis,
                    width: smimgWidth,
                    height: smimgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"

                },
                mdimageStyles: {
                    display: mddis,
                    width: mdimgWidth,
                    height: mdimgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"
                }
            };
        case "3":
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "90px";
                imgHeight = "90px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "150px";
                imgHeight = "150px";
                mdimgWidth = "90px";
                mdimgHeight = "90px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "300px";
                mdimgWidth = "150px";
                mdimgHeight = "150px";
                smimgWidth = "90px";
                smimgHeight = "90px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "500px";
                mdimgWidth = "300px";
                mdimgHeight = "300px";
                smimgWidth = "150px";
                smimgHeight = "150px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "700px";
                mdimgWidth = "500px";
                mdimgHeight = "500px";
                smimgWidth = "300px";
                smimgHeight = "300px";
            }
            return {
                imageStyles: {
                    width: imgWidth,
                    height: imgHeight,
                    borderRadius: "100%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    display: display,
                    flex: "1"
                },
                hoverStyle: {
                    boxShadow: hoverShadow
                },
                smimageStyles: {
                    display: smdis,
                    width: smimgWidth,
                    height: smimgHeight,
                    borderRadius: "100%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"

                },
                mdimageStyles: {
                    display: mddis,
                    width: mdimgWidth,
                    height: mdimgHeight,
                    borderRadius: "100%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"
                }
            };

        case "4":
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "90px";
                imgHeight = "90px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "150px";
                imgHeight = "150px";
                mdimgWidth = "90px";
                mdimgHeight = "90px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "300px";
                mdimgWidth = "150px";
                mdimgHeight = "150px";
                smimgWidth = "90px";
                smimgHeight = "90px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "500px";
                mdimgWidth = "300px";
                mdimgHeight = "300px";
                smimgWidth = "150px";
                smimgHeight = "150px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "700px";
                mdimgWidth = "500px";
                mdimgHeight = "500px";
                smimgWidth = "300px";
                smimgHeight = "300px";
            }

            return {
                imageStyles: {
                    width: imgWidth,
                    height: imgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    display: display,
                    flex: "1"
                },
                hoverStyle: {
                    boxShadow: hoverShadow
                },
                smimageStyles: {
                    display: smdis,
                    width: smimgWidth,
                    height: smimgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"

                },
                mdimageStyles: {
                    display: mddis,
                    width: mdimgWidth,
                    height: mdimgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"
                }
            };
        case "5":
            if (size === "tn") {
                imgWidth = "81px";
                imgHeight = "50px";
                mdimgWidth = "81px";
                mdimgHeight = "50px";
                smimgWidth = "81px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "81px";
                imgHeight = "50px";
                mdimgWidth = "81px";
                mdimgHeight = "50px";
                smimgWidth = "81px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "243px";
                imgHeight = "150px";
                mdimgWidth = "145.8px";
                mdimgHeight = "90px";
                smimgWidth = "81px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "405px";
                imgHeight = "300px";
                mdimgWidth = "202.5px";
                mdimgHeight = "150px";
                smimgWidth = "121.5px";
                smimgHeight = "90px";
            } else if (size === "lg") {
                imgWidth = "809px";
                imgHeight = "500px";
                mdimgWidth = "485.4px";
                mdimgHeight = "300px";
                smimgWidth = "242.7px";
                smimgHeight = "150px";
            } else if (size === "exlg") {
                imgWidth = "1137px";
                imgHeight = "700px";
                mdimgWidth = "812px";
                mdimgHeight = "500px";
                smimgWidth = "487px";
                smimgHeight = "300px";
            }
            return {
                imageStyles: {
                    width: imgWidth,
                    height: imgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    display: display,
                    flex: "1"
                },
                hoverStyle: {
                    boxShadow: hoverShadow
                },
                smimageStyles: {
                    display: smdis,
                    width: smimgWidth,
                    height: smimgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"

                },
                mdimageStyles: {
                    display: mddis,
                    width: mdimgWidth,
                    height: mdimgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"
                }
            };
        case "6":
            if (size === "tn") {
                imgWidth = "81px";
                imgHeight = "50px";
                mdimgWidth = "81px";
                mdimgHeight = "50px";
                smimgWidth = "81px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "81px";
                imgHeight = "50px";
                mdimgWidth = "81px";
                mdimgHeight = "50px";
                smimgWidth = "81px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "243px";
                imgHeight = "150px";
                mdimgWidth = "145.8px";
                mdimgHeight = "90px";
                smimgWidth = "81px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "405px";
                imgHeight = "300px";
                mdimgWidth = "202.5px";
                mdimgHeight = "150px";
                smimgWidth = "121.5px";
                smimgHeight = "90px";
            } else if (size === "lg") {
                imgWidth = "809px";
                imgHeight = "500px";
                mdimgWidth = "485.4px";
                mdimgHeight = "300px";
                smimgWidth = "242.7px";
                smimgHeight = "150px";
            } else if (size === "exlg") {
                imgWidth = "1137px";
                imgHeight = "700px";
                mdimgWidth = "812px";
                mdimgHeight = "500px";
                smimgWidth = "487px";
                smimgHeight = "300px";
            }
            return {
                imageStyles: {
                    width: imgWidth,
                    height: imgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    display: display,
                    flex: "1"
                },
                hoverStyle: {
                    boxShadow: state.hoverShadow
                },
                smimageStyles: {
                    display: smdis,
                    width: smimgWidth,
                    height: smimgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"

                },
                mdimageStyles: {
                    display: mddis,
                    width: mdimgWidth,
                    height: mdimgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"
                }

            };
        case "7":
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "81px";
                mdimgWidth = "50px";
                mdimgHeight = "81px";
                smimgWidth = "50px";
                smimgHeight = "81px";
            } else if (size === "exsm") {
                imgWidth = "50px";
                imgHeight = "81px";
                mdimgWidth = "50px";
                mdimgHeight = "81px";
                smimgWidth = "50px";
                smimgHeight = "81px";
            } else if (size === "sm") {
                imgWidth = "150px";
                imgHeight = "243px";
                mdimgWidth = "90px";
                mdimgHeight = "145.8px";
                smimgWidth = "50px";
                smimgHeight = "81px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "405px";
                mdimgWidth = "150px";
                mdimgHeight = "202.5px";
                smimgWidth = "90px";
                smimgHeight = "121.5px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "809px";
                mdimgWidth = "300px";
                mdimgHeight = "485.4px";
                smimgWidth = "150px";
                smimgHeight = "242.7px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "1197px";
                mdimgWidth = "500px";
                mdimgHeight = "812px";
                smimgWidth = "300px";
                smimgHeight = "487pxpx";
            }
            return {
                imageStyles: {
                    width: imgWidth,
                    height: imgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    display: display,
                    flex: "1"
                },
                hoverStyle: {
                    boxShadow: hoverShadow
                },
                smimageStyles: (_smimageStyles = {
                    display: smdis,
                    width: smimgWidth,
                    height: smimgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding
                }, _defineProperty(_smimageStyles, 'display', display), _defineProperty(_smimageStyles, 'flex', "1"), _smimageStyles),
                mdimageStyles: {
                    display: mddis,
                    width: mdimgWidth,
                    height: mdimgHeight,
                    borderRadius: "30%",
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"
                }
            };

        case "8":
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "81px";
                mdimgWidth = "50px";
                mdimgHeight = "81px";
                smimgWidth = "50px";
                smimgHeight = "81px";
            } else if (size === "exsm") {
                imgWidth = "50px";
                imgHeight = "81px";
                mdimgWidth = "50px";
                mdimgHeight = "81px";
                smimgWidth = "50px";
                smimgHeight = "81px";
            } else if (size === "sm") {
                imgWidth = "150px";
                imgHeight = "243px";
                mdimgWidth = "90px";
                mdimgHeight = "145.8px";
                smimgWidth = "50px";
                smimgHeight = "81px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "405px";
                mdimgWidth = "150px";
                mdimgHeight = "202.5px";
                smimgWidth = "90px";
                smimgHeight = "121.5px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "809px";
                mdimgWidth = "300px";
                mdimgHeight = "485.4px";
                smimgWidth = "150px";
                smimgHeight = "242.7px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "1197px";
                mdimgWidth = "500px";
                mdimgHeight = "812px";
                smimgWidth = "300px";
                smimgHeight = "487pxpx";
            }
            return {
                imageStyles: {
                    width: imgWidth,
                    height: imgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    display: display,
                    flex: "1"
                },
                hoverStyle: {
                    boxShadow: hoverShadow
                },
                smimageStyles: {
                    display: smdis,
                    width: smimgWidth,
                    height: smimgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"

                },
                mdimageStyles: {
                    display: mddis,
                    width: mdimgWidth,
                    height: mdimgHeight,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    boxShadow: boxShadow,
                    margin: margin,
                    padding: padding,
                    flex: "1"
                }
            };
        default:
            return;
    }
}