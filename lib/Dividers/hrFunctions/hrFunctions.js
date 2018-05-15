export default function hrFunction(type, props, state, self) {
    let cursor = "";

    let width= props.width || '100%'
    let  height= props.height || '5px'
    let  mdheight= props.mdheight || '5px'
    let  smheight= props.smheight || '5px'
    let  background= props.background || 'black'
    let  padding= props.padding
    let  margin= props.margin || '5px 0px 5px 0px'
    let  bLeft= props.bLeft
    let  bRight= props.bRight
    let  bTop= props.bTop
    let  bBottom= props.bBottom
    let  border= props.border
    let  transform= props.transform
    let  transformOrigin= props.transformOrigin
    let smDis = props.smDis
    let mdDis = props.mdDis

    switch (type) {
        case '1':
            cursor = "pointer"
            return {
                STYLES:{
                    width: width,
                    height: height,
                    background: background,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    padding: padding,
                    margin: margin
                },
                smSTYLES:{
                    display: smDis,
                    width: width,
                    height: smheight,
                    background: background,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    padding: padding,
                    margin: margin
                },
                mdSTYLES:{
                    display: mdDis,
                    width: width,
                    height: mdheight,
                    background: background,
                    borderLeft: bLeft,
                    borderRight: bRight,
                    borderTop: bTop,
                    borderBottom: bBottom,
                    border: border,
                    transform: transform,
                    transformOrigin: transformOrigin,
                    padding: padding,
                    margin: margin
                }
            }
        default:
            return;
    }
}