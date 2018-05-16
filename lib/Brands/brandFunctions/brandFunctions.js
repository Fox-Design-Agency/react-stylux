export default function brandFunction(type, props, state, self) {
    let cursor = "";

    let display = props.display || 'flex'
    let direction = props.direction || 'row'
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'

    switch (type) {
        case '1':
            cursor = "pointer"
            return {
                brand: {
                    display: display,
                    flex: "1",
                    flexDirection: direction,
                    //width: '15%',
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                brand_name: {
                    display: 'flex',
                    fontWeight: '900',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,

                },
                smbrand: {
                    display: smdis,
                    flex: "1",
                    flexDirection: direction,
                    //width: '15%',
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                smbrand_name: {
                    display: smdis,
                    fontWeight: '900',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,

                },
                mdbrand: {
                    display: mddis,
                    flex: "1",
                    flexDirection: direction,
                    //width: '15%',
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                mdbrand_name: {
                    display: mddis,
                    fontWeight: '900',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                }
            }
        case '2':
            cursor = "pointer"
            return {
                brand: {
                    display: 'flex',
                    flex: "1",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                smbrand: {
                    display: smdis,
                    flex: "1",
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
                    flex: "1",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            }
        case '3':
            cursor = "pointer"
            return {
                brand: {
                    display: 'flex',
                    flex: "1",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                smbrand: {
                    display: smdis,
                    flex: "1",
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
                    flex: "1",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            }
        case '4':
            cursor = "pointer"
            return {
                brand: {
                    display: 'flex',
                    flex: "1",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                smbrand: {
                    display: smdis,
                    flex: "1",
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
                    flex: "1",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            }
        case '5':
            cursor = "pointer"
            return {
                brand: {
                    display: 'flex',
                    flex: "1",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                smbrand: {
                    display: smdis,
                    flex: "1",
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
                    flex: "1",
                    alignItems: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode
                }
            }
        default:
            return
    }
}