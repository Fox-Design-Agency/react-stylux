"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = imageFunction;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _nestingstyles = require("nestingstyles");

var _nestingstyles2 = _interopRequireDefault(_nestingstyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageFunction(type, size, props, state) {
    var imageStyles = void 0,
        imgWidth = void 0,
        imgHeight = void 0,
        mdimgWidth = void 0,
        mdimgHeight = void 0,
        smimgHeight = void 0,
        smimgWidth = "";

    switch (type) {
        case type = '1':
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
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: imgWidth,
                        height: imgHeight,
                        borderRadius: "100%",
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight
                        }
                    }
                })
            };

        case type = "2":
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
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: imgWidth,
                        height: imgHeight,
                        borderRadius: "30%",
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight
                        }
                    }
                })
            };

        case type = "3":
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
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: imgWidth,
                        height: imgHeight,
                        borderRadius: "100%",
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight
                        }
                    }
                })
            };

        case type = "4":
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
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: imgWidth,
                        height: imgHeight,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight
                        }
                    }
                })
            };
        case type = "5":
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
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: imgWidth,
                        height: imgHeight,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight
                        }
                    }
                })
            };
        case type = "6":
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
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: imgWidth,
                        height: imgHeight,
                        borderRadius: "30%",
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight
                        }
                    }
                })
            };
        case type = "7":
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
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: imgWidth,
                        height: imgHeight,
                        borderRadius: "30%",
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight
                        }
                    }
                })
            };

        case type = "8":
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
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: imgWidth,
                        height: imgHeight,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight
                        }
                    }
                })
            };
        case type = "custom":
            imgWidth = "50px";
            imgHeight = "50px";
            return {
                IMAGESTYLES: _nestingstyles2.default.create({
                    imageStyles: {
                        width: state.width || imgWidth,
                        height: state.height || imgHeight,
                        borderRadius: state.borderRadius,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: state.animationIterationCount,
                        animationTimingFunction: state.animationTimingFunction,
                        animationName: state.animationName,
                        animationDuration: state.animationDuration,
                        transform: state.transform,
                        transformOrigin: state.transformOrigin,
                        animationFillMode: state.animationFillMode,
                        boxShadow: state.boxShadow,
                        margin: state.margin,
                        padding: state.padding,
                        display: state.display
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: state.smimgWidth,
                            height: state.smimgHeight
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: state.mdimgWidth,
                            height: state.mdimgHeight
                        }
                    }
                })
            };
        default:
            return;
    }
}