'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = brandFunction;
function brandFunction(type, props, state, self) {
    var cursor = "";

    var display = props.display || 'flex';
    var direction = props.direction || 'row';
    var animationIterationCount = props.aniCount;
    var animationTimingFunction = props.aniTime;
    var animationName = props.aniName;
    var animationDuration = props.aniDur;
    var transformOrigin = props.transformOrigin;
    var animationFillMode = props.aniFillMode;
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';

    switch (type) {
        case '1':
            cursor = "pointer";
            return {
                brand: {
                    display: display,
                    flex: "1 0 auto",
                    flexDirection: direction,
                    //width: '15%',
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                brand_name: {
                    display: 'flex',
                    fontWeight: '900',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode

                },
                smbrand: {
                    display: smdis,
                    flex: "1 0 auto",
                    flexDirection: direction,
                    //width: '15%',
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                smbrand_name: {
                    display: smdis,
                    fontWeight: '900',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode

                },
                mdbrand: {
                    display: mddis,
                    flex: "1 0 auto",
                    flexDirection: direction,
                    //width: '15%',
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                mdbrand_name: {
                    display: mddis,
                    fontWeight: '900',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            };
        case '2':
            cursor = "pointer";
            return {
                brand: {
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                smbrand: {
                    display: smdis,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode

                },
                mdbrand: {
                    display: mddis,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            };
        case '3':
            cursor = "pointer";
            return {
                brand: {
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                smbrand: {
                    display: smdis,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode

                },
                mdbrand: {
                    display: mddis,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            };
        case '4':
            cursor = "pointer";
            return {
                brand: {
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                smbrand: {
                    display: smdis,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode

                },
                mdbrand: {
                    display: mddis,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            };
        case '5':
            cursor = "pointer";
            return {
                brand: {
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                },
                smbrand: {
                    display: smdis,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode

                },
                mdbrand: {
                    display: mddis,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            };
        default:
            return;
    }
}