import React from "react";
import StyleSheet from 'nestingstyles';
export default function imageFunction(type, size, props, state) {
    let imageStyles, imgWidth, imgHeight, mdimgWidth, mdimgHeight, smimgHeight, smimgWidth = "";

    switch (type) {
        case (type = 'circle'):
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
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "300px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "500px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "700px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            }
            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight,
                        }
                    }
                }),
            }

        case (type = "rounded"):
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
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "300px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "500px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "700px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            }
            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight,
                        }
                    }
                }),
            }

        case (type = "oval"):
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
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "300px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "500px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "700px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            }
            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight,
                        }
                    }
                }),
            }

        case (type = "square"):
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
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "300px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "500px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "700px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            }

            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight,
                        }
                    }
                }),
            }
        case (type = "rectangle"):
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "81px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "243px";
                imgHeight = "150px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "405px";
                imgHeight = "300px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "lg") {
                imgWidth = "809px";
                imgHeight = "500px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exlg") {
                imgWidth = "1137px";
                imgHeight = "700px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            }
            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight,
                        }
                    }
                }),
            }
        case (type = "roundedRectangle"):
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "81px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "243px";
                imgHeight = "150px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "405px";
                imgHeight = "300px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "lg") {
                imgWidth = "809px";
                imgHeight = "500px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exlg") {
                imgWidth = "1137px";
                imgHeight = "700px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            }
            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight,
                        }
                    }
                }),
            }
        case (type = "tallRoundedRectangle"):
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "50px";
                imgHeight = "81px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "150px";
                imgHeight = "243px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "405px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "809px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "1197px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            }
            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight,
                        }
                    }
                }),
            }

        case (type = "tallRectangle"):
            if (size === "tn") {
                imgWidth = "50px";
                imgHeight = "50px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exsm") {
                imgWidth = "50px";
                imgHeight = "81px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "sm") {
                imgWidth = "150px";
                imgHeight = "243px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "md") {
                imgWidth = "300px";
                imgHeight = "405px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "lg") {
                imgWidth = "500px";
                imgHeight = "809px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            } else if (size === "exlg") {
                imgWidth = "700px";
                imgHeight = "1197px";
                mdimgWidth = "50px";
                mdimgHeight = "50px";
                smimgWidth = "50px";
                smimgHeight = "50px";
            }
            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: smimgWidth,
                            height: smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: mdimgWidth,
                            height: mdimgHeight,
                        }
                    }
                }),
            }
        case (type = "custom"):
            imgWidth = "50px";
            imgHeight = "50px";
            return {
                IMAGESTYLES: StyleSheet.create({
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
                        display: state.display,
                    },
                    hoverStyle: {
                        boxShadow: state.hoverShadow
                    },
                    '@media (max-width: 768px)': {
                        imageStyles: {
                            display: state.smdis,
                            width: state.smimgWidth,
                            height: state.smimgHeight,
                        }
                    },
                    '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                        imageStyles: {
                            display: state.mddis,
                            width: state.mdimgWidth,
                            height: state.mdimgHeight,
                        }
                    }
                }),
            }
        default:
            return
    }
}
