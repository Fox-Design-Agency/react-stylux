export default function carouselFunction(type, props, state, self) {
    let cursor = "";

    let arrowColor = props.arrowColor || 'white'
    let background = props.background || 'black'
    let padding = props.padding
    let height = props.height || '450px'
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

                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    padding: padding,
                },
                LEFT_ARROW: {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: `transparent ${arrowColor} transparent transparent`,
                    left: '0',
                    marginLeft: '30px',
                },
                RIGHT_ARROW: {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: `transparent transparent transparent ${arrowColor}`,
                    right: '0',
                    marginRight: '30px',
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height,
                },
                SLIDE: {
                    height: height,

                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
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
                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    padding: padding,
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height,
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: height,
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                CIRCLES: {
                    cursor: 'pointer',
                    height: '15px',
                    width: '15px',
                    margin: '2px 2px',
                    backgroundColor: '#bbb',
                    borderRadius: '50%',
                    display: 'inline-block',
                    textAlign: 'center',
                },
                CIRCLESDIV: {
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative',
                }
            }
        case '3':
            cursor = "pointer"
            return {
                LEFT_ARROW: {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: `transparent ${arrowColor} transparent transparent`,
                    left: '0',
                    marginLeft: '30px',
                },
                RIGHT_ARROW: {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: `transparent transparent transparent ${arrowColor}`,
                    right: '0',
                    marginRight: '30px',
                },
                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    padding: padding,
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height,
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: height,
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                CIRCLES: {
                    cursor: 'pointer',
                    height: '15px',
                    width: '15px',
                    margin: '2px 2px',
                    backgroundColor: '#bbb',
                    borderRadius: '50%',
                    display: 'inline-block',
                    textAlign: 'center',
                },
                CIRCLESDIV: {
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative',
                }
            }
        case '4':
            cursor = "pointer"
            return {
                LEFT_ARROW: {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: `transparent ${arrowColor} transparent transparent`,
                    left: '0',
                    marginLeft: '30px',
                },
                RIGHT_ARROW: {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: `transparent transparent transparent ${arrowColor}`,
                    right: '0',
                    marginRight: '30px',
                },
                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    padding: padding,
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height,
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: height,
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                }
            }
        case '5':
            cursor = "pointer"
            return {
                WRAP: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    background: background,
                    overflowY: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    padding: padding,
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: height,
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: height,
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                }
            }
        default:
            return
    }
}