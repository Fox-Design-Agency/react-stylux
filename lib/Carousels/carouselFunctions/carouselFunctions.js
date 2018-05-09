import React from 'react';
import StyleSheet from 'nestingstyles';
export default function carouselFunction(type, props, state, self) {
    let cursor = "";

    switch (type) {
        case (type = '1'):
            cursor = "pointer"
            return {

                WRAP: {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    background: state.background,
                    overflowY: 'hidden',
                    display: 'flex',
                    padding: state.padding,
                },
                LEFT_ARROW: {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: `transparent ${state.arrowColor} transparent transparent`,
                    left: '0',
                    marginLeft: '30px',
                },
                RIGHT_ARROW: {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: `transparent transparent transparent ${state.arrowColor}`,
                    right: '0',
                    marginRight: '30px',
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: state.height,
                },
                SLIDE: {
                    height: state.height,

                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
                }
            }
        case (type = '2'):
            cursor = "pointer"
            return {
                WRAP: {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    background: state.background,
                    overflowY: 'hidden',
                    display: 'flex',
                    padding: state.padding,
                },
                SLIDER: {
                    width: '100%',
                    overflowX: 'hidden',
                    height: state.height,
                },
                SLIDE: {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: state.height,
                    // display:'block'
                },
                SLIDE_CONTENT: {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
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
        case (type = '3'):
            cursor = "pointer"
            return {
                LEFT_ARROW : {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: `transparent ${state.arrowColor} transparent transparent`,
                    left: '0',
                    marginLeft: '30px',
                },
                RIGHT_ARROW : {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: `transparent transparent transparent ${state.arrowColor}`,
                    right: '0',
                    marginRight: '30px',
                },
                WRAP : {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    background: state.background,
                    overflowY: 'hidden',
                    display: 'flex',
                    padding: state.padding,
                },
                SLIDER : {
                    width: '100%',
                    overflowX: 'hidden',
                    height: state.height,
                },
                 SLIDE : {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: state.height,
                    // display:'block'
                },
                 SLIDE_CONTENT : {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
                },
                CIRCLES : {
                    cursor: 'pointer',
                    height: '15px',
                    width: '15px',
                    margin: '2px 2px',
                    backgroundColor: '#bbb',
                    borderRadius: '50%',
                    display: 'inline-block',
                    textAlign: 'center',
                },
                 CIRCLESDIV : {
                    textAlign: 'center',
                    width: '100%',
                    position: 'relative',
                }
            }
        case (type = '4'):
            cursor = "pointer"
            return {
                LEFT_ARROW : {
                    borderWidth: '30px 40px 30px 0',
                    borderColor: `transparent ${state.arrowColor} transparent transparent`,
                    left: '0',
                    marginLeft: '30px',
                },
                RIGHT_ARROW : {
                    borderWidth: '30px 0 30px 40px',
                    borderColor: `transparent transparent transparent ${state.arrowColor}`,
                    right: '0',
                    marginRight: '30px',
                },
                WRAP : {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    background: state.background,
                    overflowY: 'hidden',
                    display: 'flex',
                    padding: state.padding,
                },
                SLIDER : {
                    width: '100%',
                    overflowX: 'hidden',
                    height: state.height,
                },
                SLIDE : {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: state.height,
                    // display:'block'
                },
                SLIDE_CONTENT : {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
                }
            }
        case (type = '5'):
            cursor = "pointer"
            return {
                WRAP : {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    background: state.background,
                    overflowY: 'hidden',
                    display: 'flex',
                    padding: state.padding,
                },
                SLIDER : {
                    width: '100%',
                    overflowX: 'hidden',
                    height: state.height,
                },
                SLIDE : {
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    height: state.height,
                    // display:'block'
                },
                SLIDE_CONTENT : {
                    width: '100%',
                    height: state.height,
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
                }
            }
        default:
            return
    }
}