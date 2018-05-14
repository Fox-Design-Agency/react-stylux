export default function modalFunction(type, props, state, self) {
    let cursor, show = "";
    let boxTop = props.boxTop || '40%'
    let boxRight = props.boxRight || '45%'
    let boxLeft = props.boxLeft
    let boxBottom = props.boxBottom
    let boxPosition = props.boxPosition || 'fixed'
    let boxBackground = props.boxBackground || 'white'
    let boxHeight = props.boxHeight || '200px'
    let boxWidth = props.boxWidth || '200px'
    let boxAlign = props.boxAlign || 'center'
    let boxJustify = props.boxJustify || 'center'
    let boxShadow = props.boxShadow || '1px 2px 2px black'
    let btnBackground = props.btnBackground || 'white'
    let bColor = props.bColor || 'black'
    let bBackground = props.bBackground
    let bFontSize = props.bFontSize || '1.333em'
    let bFontVariant = props.bFontVariant
    let bFontWeight = props.bFontWeight
    let bTextShadow = props.bTextShadow
    let bMargin = props.bMargin
    let bPadding = props.bPadding
    let bBorderLeft = props.bBorderLeft
    let bBorderRight = props.bBorderRight
    let bBorderTop = props.bBorderTop
    let bBorderBottom = props.bBorderBottom
    let bBorder = props.bBorder
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'

    switch (type) {
        case  '1':
            cursor = "pointer"
            show = arguments[4]
            return {
                BOXSTYLES: {
                    width: boxWidth,
                    height: boxHeight,
                    background: boxBackground,
                    position: boxPosition,
                    top: boxTop,
                    left: boxLeft,
                    right: boxRight,
                    bottom: boxBottom,
                    display: show ? 'flex' : 'none',
                    flex: "1 0 auto",
                    alignItems: boxAlign,
                    justifyContent: boxJustify,
                    boxShadow: boxShadow,
                    zIndex: '2000',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                },
                CLICKBOX: {
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: bColor,
                    background: bBackground,
                    fontSize: bFontSize,
                    fontVariant: bFontVariant,
                    fontWeight: bFontWeight,
                    textShadow: bTextShadow,
                    margin: bMargin,
                    padding: bPadding,
                    borderLeft: bBorderLeft,
                    borderRight: bBorderRight,
                    borderTop: bBorderTop,
                    borderBottom: bBorderBottom,
                    border: bBorder,
                },
                BTNSTYLE: {
                    borderRadius: '100%',
                    cursor: 'pointer',
                    position: 'absolute',
                    left: boxWidth,
                    bottom: boxHeight,
                    background: btnBackground,
                }

            }
        case '2':
            cursor = "pointer"
            show = arguments[4]
            return {

                MODAL: {
                    display: show ? 'flex' : 'none',
                    flex: "1 0 auto",
                    position: 'fixed',
                    zIndex: '1',
                    right: '0',
                    top: '0',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'auto',
                    backgroundColor: 'rgb(0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                },
                MODALCONTENT: {
                    backgroundColor: '#fff',
                    margin: '15% auto',
                    padding: '20px',
                    border: '1px solid #888',
                    width: boxWidth,
                    height: boxHeight
                },
                CLOSEBTN: {
                    color: '#aaa',
                    float: 'right',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                },
                OPENERBTN: {
                    cursor: 'pointer',

                }
            }
        case  '3':
            cursor = "pointer"
            show = arguments[4]
            return {
                MODAL: {
                    display: show ? 'flex' : 'none',
                    flex: "1 0 auto",
                    position: 'fixed',
                    zIndex: '1',
                    right: '0',
                    top: '0',
                    width: '100vw',
                    height: '100vh',
                    overflow: 'auto',
                    backgroundColor: 'rgb(0,0,0)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                },
                MODALCONTENT: {
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    margin: 'auto',
                    padding: '0',
                    border: '1px solid #888',
                    width: '80%',
                },
                MODALHEADER: {
                    padding: '2px 16px',
                    backgroundColor: '#eee',
                    color: 'white'
                },
                MODALBODY: {
                    padding: '2px 16px',
                },
                MODALFOOTER: {
                    padding: '2px 16px',
                    position: 'relative',
                    backgroundColor: '#eee',
                    color: 'white',
                    bottom: '0',
                },
                CLOSEBTN: {
                    color: '#000',
                    float: 'right',
                    fontSize: '28px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                },
                OPENERBTN: {
                    cursor: 'pointer',

                }

            }
        default:
            return;
    }
}