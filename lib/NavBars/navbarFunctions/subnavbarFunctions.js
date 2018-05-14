export default function subnavbarFunction(type, props, state, self) {
    let cursor = "";

    switch (type) {
        case  '1':
            cursor = "pointer"
            return {
                subnavbar: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    display: state.display,
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color,
                    top: state.top,
                    bottom: state.bottom,
                    left: state.left,
                    right: state.right,
                    position: state.position,
                    zIndex: state.zIndex,
                },
                smsubnavbar: {
                    display: state.smdis,
                    width: state.totalWidth,
                    height: state.totalHeight,
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color,
                    top: state.top,
                    bottom: state.bottom,
                    left: state.left,
                    right: state.right,
                    position: state.position,
                    zIndex: state.zIndex,

                },
                mdsubnavbar: {
                    display: state.mddis,
                    alignItems: state.alignItems,
                    width: state.totalWidth,
                    height: state.totalHeight,
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color,
                    top: state.top,
                    bottom: state.bottom,
                    left: state.left,
                    right: state.right,
                    position: state.position,
                    zIndex: state.zIndex,
                },
                subnavbar_navbar: {
                    width: state.navBarWidth,
                    height: 'inherit',
                    display: 'flex',
                    flex: "1 0 auto",
                    flexWrap: 'wrap',
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                },
                smsubnavbar_navbar: {
                    display: state.smdis,
                    width: state.navBarWidth,
                    height: 'inherit',
                    flex: "1 0 auto",
                    flexWrap: 'wrap',
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,

                },
                mdsubnavbar_navbar: {
                    display: state.mddis,
                    width: state.navBarWidth,
                    height: 'inherit',
                    flex: "1 0 auto",
                    flexWrap: 'wrap',
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                }
            }
        case '2':
            cursor = "pointer"
            return {
                SUBNAVBAR: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    color: state.color,
                    display: state.display,
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    posistion: 'sticky',
                    top: 0,
                },
                smSUBNAVBAR_NAVBAR1: {
                    width: state.navBarWidth,
                    height: 'inherit',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: "1 0 auto",
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                },
                mdSUBNAVBAR_NAVBAR2: {
                    width: state.navBarWidth,
                    height: 'inherit',
                    display: 'flex',
                    flexWrap: 'wrap',
                    flex: "1 0 auto",
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                }

            }
        // case (type = '3'):
        //     cursor = "pointer"
        //     return {


        //     }
        // case (type = '4'):
        //     cursor = "pointer"
        //     return {


        //     }
        // case (type = '5'):
        //     cursor = "pointer"
        //     return {


        //     }
        default:
            return;
    }
}