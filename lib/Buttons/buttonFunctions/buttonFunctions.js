export default function buttonFunction(type, props, state, self) {
    let buttonStyles, cursor = "";


    let width = props.width
    let height = props.height
    let fontSize = props.fontSize || '20px'
    let color = props.color || '#000000'
    let hoverColor = props.hover || 'white'
    let hoverBackground = props.hoverBackground || '#000000'
    let revColor = props.color || '#000000'
    let frev = props.color || 'white'
    let background = props.background || '#ffffff'
    let backgroundColor = props.background || 'white'
    let blockBackground = props.background || "black"
    let revBackground = props.background || '#ffffff'
    let borderRadius = props.borderRadius || '28px'
    let border = props.border || 'solid #000000 2px'
    let padding = props.padding || '10px 20px 10px 20px'
    let margin = props.margin || "0 0 17px 0"
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let trandform = props.transform
    let trandformrev = props.transform || 'translateY(-4px)'
    let hovBackground = props.hovBackground || '#eee'
    let hovBoxShadow = props.hovBoxShadow || '0 5px #666'
    let floatBoxShadow = props.boxShadow
    let boxShadow = props.boxShadow || '0 9px #999'
    let boxShadowRev = props.boxShadow || '0 9px #999'
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis
    let mddis = props.mdDis
    switch (type) {
        case '1':
            backgroundColor = arguments[4] || backgroundColor
            color = arguments[5] || color
            cursor = "pointer"
            return {
                changeHover: function () {
                    let background = hoverBackground;
                    let color = hoverColor;
                    self.renderStuff(background, color)
                },
                changeHoverBack: function () {
                    let revbackground = revBackground;
                    let revcolor = revColor;
                    self.renderStuff(revbackground, revcolor)
                },
                buttonStyles: {
                    borderRadius: borderRadius,
                    color: color,
                    fontSize: fontSize,
                    background: backgroundColor,
                    padding: padding,
                    border: border,
                    cursor: cursor,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    width: width,
                    height: height,
                },
                smbuttonStyles: {
                    display: smdis,
                    borderRadius: borderRadius,
                    color: color,
                    fontSize: fontSize,
                    background: backgroundColor,
                    padding: padding,
                    border: border,
                    cursor: cursor,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    width: width,
                    height: height

                },
                mdbuttonStyles: {
                    display: mddis,
                    borderRadius: borderRadius,
                    color: color,
                    fontSize: fontSize,
                    background: backgroundColor,
                    padding: padding,
                    border: border,
                    cursor: cursor,
                    animationIterationCount: animationIterationCount,
                    animationTimingFunction: animationTimingFunction,
                    animationName: animationName,
                    animationDuration: animationDuration,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    animationFillMode: animationFillMode,
                    width: width,
                    height: height
                }
            }
        case '2':
            backgroundColor = arguments[4] || backgroundColor
            boxxShadow = arguments[5] || boxShadow
            let transform = arguments[6] || transform
            margin = props.margin || "5px 0 17px 0"
            cursor = "pointer"
            return {
                changeHover: function () {
                    let backgroundCol = hovBackground
                    let boxShadow = hovBoxShadow
                    let transform = 'translateY(4px)'
                    self.renderStuff(backgroundCol, boxShadow, transform)
                },
                changeHoverBack: function () {
                    let backgroundCol = revBackground
                    let boxShadow = boxShadowRev
                    let transform = trandformrev
                    self.renderStuff(backgroundCol, boxShadow, transform)
                },
                buttonStyles: {
                    display: 'inline-block',
                    padding: '15px 25px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    outline: 'none',
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: '15px',
                    boxShadow: boxxShadow,
                    transform: transform,
                    margin: margin,
                },

                smbuttonStyles: {
                    display: smdis,
                    padding: '15px 25px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    outline: 'none',
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: '15px',
                    boxShadow: boxxShadow,
                    transform: transform,
                    margin: margin,

                },
                mdbuttonStyles: {
                    display: mddis,
                    padding: '15px 25px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    outline: 'none',
                    color: color,
                    backgroundColor: backgroundColor,
                    borderRadius: '15px',
                    boxShadow: boxxShadow,
                    transform: transform,
                    margin: margin,
                }

            }
        case '3':
            let boxxShadow = arguments[4] || floatBoxShadow
            cursor = "pointer"
            return {
                changeHover: function () {
                    let hovBoxShadow = '0 5px 7px 0 black, 0 10px 20px 0';
                    self.renderStuff(hovBoxShadow)
                },
                changeHoverBack: function () {
                    let revBoxShadow = floatBoxShadow;
                    self.renderStuff(revBoxShadow)
                },
                buttonStyles: {
                    width: width,
                    display: 'block',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    boxShadow: boxxShadow,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    margin: margin,
                },
                smbuttonStyles: {
                    display: smdis,
                    width: width,
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    boxShadow: boxxShadow,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    margin: margin

                },
                mdbuttonStyles: {
                    display: mddis,
                    width: width,
                    display: 'block',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    boxShadow: boxxShadow,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    margin: margin
                }
            }
        case '4':
            backgroundColor = arguments[4] || blockBackground
            color = arguments[5] || frev
            cursor = "pointer"
            return {
                changeHover: function () {
                    let backgroundCol = hovBackground
                    let col = revColor
                    self.renderStuff(backgroundCol, col)
                },
                changeHoverBack: function () {
                    let backgroundCol = revColor
                    let col = frev
                    self.renderStuff(backgroundCol, col)
                },
                buttonStyles: {
                    width: '100%',
                    display: 'block',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin,
                },
                smbuttonStyles: {
                    display: smdis,
                    width: '100%',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin,

                },
                mdbuttonStyles: {
                    display: mddis,
                    width: '100%',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: cursor,
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin,
                }
            }
        case '5':
            backgroundColor = arguments[4] || backgroundColor
            cursor = "pointer"
            return {
                changeHover: function () {
                    let backgroundCol = hovBackground
                    self.renderStuff(backgroundCol)
                },
                changeHoverBack: function () {
                    let backgroundCol = revBackground
                    self.renderStuff(backgroundCol)
                },
                buttonStyles: {
                    width: width,
                    display: 'block',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin,
                },
                smbuttonStyles: {
                    display: smdis,
                    width: width,
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin

                },
                mdbuttonStyles: {
                    display: mddis,
                    width: width,
                    display: 'block',
                    border: 'none',
                    backgroundColor: backgroundColor,
                    padding: '14px 28px',
                    fontSize: fontSize,
                    cursor: 'pointer',
                    textAlign: 'center',
                    color: color,
                    transform: transform,
                    transformOrigin: transformOrigin
                }

            }
        default:
            return
    }
}