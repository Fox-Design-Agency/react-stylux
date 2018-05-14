export default function heading1Function(type, props, state, self) {
    let color = props.color
    let colorRev = props.color
    let textShadow = props.shadow
    let fontFamily = props.font
    let fontSize = props.size || '7em'
    let smFontSize = props.smSize || '3.939em'
    let mdFontSize = props.mdSize || '5.25em'
    let fontWeight = props.fontWeight || '900'
    let fontVariant = props.variant
    let display = props.display || 'flex'
    let align = props.align || 'center'
    let textAlign = props.textAlign || 'center'
    let padding = props.padding || '0 0 15px 0'
    let margin = props.margin || '1px'
    let width = props.width
    let height = props.height
    let maxWidth = props.maxW
    let maxHeight = props.maxH
    let bLeft = props.bLeft
    let bRight = props.bRight
    let bTop = props.bTop
    let bBottom = props.bBottom
    let border = props.border
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transform = props.transform
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'
    let hoverColor = props.hovColor
    let wordWrap = props.wordWrap || "break-word"
    let cursor = props.cursor
    switch (type) {
        case '1':
            cursor = props.cursor
            return {
                heading: {
                    display: display,
                    fontSize: fontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor,
                },
                hoverStyle: {
                    color: hoverColor
                },
                smheading: {
                    display: smdis,
                    fontSize: smFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor,

                },
                mdheading: {
                    display: mddis,
                    fontSize: mdFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor,
                }
            }
        case '2':
            fontSize = props.size || '7em'
            smFontSize = props.smSize || '3.939em'
            mdFontSize = props.mdSize || '5.25em'
            fontWeight = props.fontWeight || '900'
            return {
                heading: {
                    fontSize: fontSize,
                    display: display,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor,
                },
                hoverStyle: {
                    color: hoverColor
                },
                smheading: {
                    display: smdis,
                    fontSize: smFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                },
                mdheading: {
                    display: mddis,
                    fontSize: mdFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                }

            }
        case '3':
            fontSize = props.size || '7em'
            smFontSize = props.smSize || '3.939em'
            mdFontSize = props.mdSize || '5.25em'
            fontWeight = props.fontWeight || '900'
            return {
                heading: {
                    display: display,
                    fontSize: fontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor,
                },
                hoverStyle: {
                    color: hoverColor
                },
                '@media screen and (max-width: 768px)': {
                    smheading: {
                        display: smdis,
                        fontSize: smFontSize,
                        width: width,
                        height: height,
                        maxWidth: maxWidth,
                        maxHeight: maxHeight,
                        color: color,
                        textShadow: textShadow,
                        borderLeft: bLeft,
                        borderRight: bRight,
                        borderTop: bTop,
                        borderBottom: bBottom,
                        border: border,
                        fontFamily: fontFamily,
                        fontWeight: fontWeight,
                        fontVariant: fontVariant,
                        alignItems: align,
                        justifyContent: align,
                        textAlign: textAlign,
                        padding: padding,
                        margin: margin,
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        animationIterationCount: animationIterationCount,
                        animationTimingFunction: animationTimingFunction,
                        animationName: animationName,
                        animationDuration: animationDuration,
                        transform: transform,
                        transformOrigin: transformOrigin,
                        animationFillMode: animationFillMode,
                        flex: "1 0 auto",
                        flexWrap: "wrap",
                        wordWrap: wordWrap,
                        cursor: cursor
                    }
                },
                mdheading: {
                    display: mddis,
                    fontSize: mdFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor
                }

            }
        case '4':
            fontSize = props.size || '7em'
            smFontSize = props.smSize || '3.939em'
            mdFontSize = props.mdSize || '5.25em'
            fontWeight = props.fontWeight || '900'
            return {
                heading: {
                    display: display,
                    fontSize: fontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor,
                },
                hoverStyle: {
                    color: hoverColor
                },
                smheading: {
                    display: smdis,
                    fontSize: smFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor,

                },
                mdheading: {
                    display: mddis,
                    fontSize: mdFontSize,
                    width: width,
                    height: height,
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    color: color,
                    textShadow: textShadow,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    fontFamily: fontFamily,
                    fontWeight: fontWeight,
                    fontVariant: fontVariant,
                    alignItems: align,
                    justifyContent: align,
                    textAlign: textAlign,
                    padding: padding,
                    margin: margin,
                    overflowX: 'hidden',
                    overflowY: 'hidden',
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    flex: "1 0 auto",
                    flexWrap: "wrap",
                    wordWrap: wordWrap,
                    cursor: cursor,
                }

            }
        // case (type = '5'):
        //     cursor = "pointer"
        //     return {


        //     }
        default:
            return;
    }
}