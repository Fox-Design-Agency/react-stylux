export default function tableFunction(type, props, state, self) {
    let cursor = "";
    let smdis = props.smDis
    let mddis = props.mdDis
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let headBorderTop = props.hbordertop
    let headBorderRight = props.hborderRight
    let headBorderBottom = props.hborderBottom
    let headBorderLeft = props.hborderLeft
    let headBorder = props.hborder || '1px solid black'
    let headVertical = props.hvertical || 'center'
    let headWidth = props.headWidth
    let headHeight = props.headHeight
    let headMargin = props.headMargin
    let headPadding = props.headPadding || '5px'
    let dBorderTop = props.dbordertop
    let dBorderRight = props.dborderRight
    let dBorderBottom = props.dborderBottom
    let dBorderLeft = props.dborderLeft
    let dBorder = props.dborder || '1px solid black'
    let dVertical = props.dVertical || 'center'
    let dwidth = props.dwidth
    let dheight = props.dheight
    let dmargin = props.dmargin
    let dpadding = props.dpadding || '5px'
    let tableBorderTop = props.tbordertop
    let tableBorderRight = props.tborderRight
    let tableBorderBottom = props.tborderBottom
    let tableBorderLeft = props.tborderLeft
    let tableBorder = props.tborder || '1px solid black'
    let tableMargin = props.tmargin || '5px'
    let tablePadding = props.tpadding
    let tableWidth = props.tableWidth
    let tableHeight = props.tableHeight
    let tableBorderCollapse = props.borderCollaspe || 'collapse'
    switch (type) {
        case '1':
            cursor = "pointer"
            return {
                tablestyle: {
                    borderTop: tableBorderTop,
                    borderRight: tableBorderRight,
                    borderBottom: tableBorderBottom,
                    borderLeft: tableBorderLeft,
                    border: tableBorder,
                    margin: tableMargin,
                    padding: tablePadding,
                    textAlign: 'center',
                    width: tableWidth,
                    height: tableHeight,
                    borderCollapse: tableBorderCollapse,
                    cursor: 'default',
                },
                smtablestyle: {
                    display: smdis,
                    borderTop: tableBorderTop,
                    borderRight: tableBorderRight,
                    borderBottom: tableBorderBottom,
                    borderLeft: tableBorderLeft,
                    border: tableBorder,
                    margin: tableMargin,
                    padding: tablePadding,
                    textAlign: 'center',
                    width: tableWidth,
                    height: tableHeight,
                    borderCollapse: tableBorderCollapse,
                    cursor: 'default',

                },
                mdtablestyle: {
                    display: mddis,
                    borderTop: tableBorderTop,
                    borderRight: tableBorderRight,
                    borderBottom: tableBorderBottom,
                    borderLeft: tableBorderLeft,
                    border: tableBorder,
                    margin: tableMargin,
                    padding: tablePadding,
                    textAlign: 'center',
                    width: tableWidth,
                    height: tableHeight,
                    borderCollapse: tableBorderCollapse,
                    cursor: 'default',
                },
                tableres: {
                    overflowX: 'auto',
                },
                smtableres: {
                    display: smdis,
                    overflowX: 'auto',
                },
                mdtableres: {
                    display: mddis,
                    overflowX: 'auto',
                }
            }
        default:
            return
    }
}