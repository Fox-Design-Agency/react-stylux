export default function navbarFunction(type, props, state, self) {
    let cursor, smdis, show, display = "";

    switch (type) {
        case '1':
            cursor = "pointer"
            smdis = state.smdis || arguments[4]
            show = arguments[5]
            return {
                navbar: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    display: 'flex',
                    flexDirection: state.direction,
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color,

                },
                smnavbar: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    display: "flex",
                    flexDirection: state.direction,
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color,

                },
                mdnavbar: {
                    width: state.totalWidth,
                    height: state.totalHeight,
                    display: "flex",
                    flexDirection: state.direction,
                    alignItems: state.alignItems,
                    margin: '0',
                    padding: state.padding,
                    background: state.mainBackground,
                    color: state.color,
                },
                navbar_navbar: {
                    width: state.navBarWidth,
                    height: state.height,
                    display: state.display,
                    flex: 1,
                    flexWrap: 'wrap',
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                    top: state.top,
                    right: state.right,
                    left: state.left,
                    bottom: state.bottom,
                    position: state.position,
                    zIndex: 200,
                },
                smnavbar_navbar: {
                    display: smdis,
                    flex: 1,
                    width: state.navBarWidth,
                    height: state.height,
                    flexWrap: 'wrap',
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                    top: state.top,
                    right: state.right,
                    left: state.left,
                    bottom: state.bottom,
                    position: state.position,
                    zIndex: 200,

                },
                mdnavbar_navbar: {
                    display: state.mddis,
                    flex: 1,
                    width: state.navBarWidth,
                    height: state.height,
                    flexWrap: 'wrap',
                    alignItems: state.columnAlign,
                    fontFamily: state.fontFamily,
                    flexDirection: state.direction,
                    top: state.top,
                    right: state.right,
                    left: state.left,
                    bottom: state.bottom,
                    position: state.position,
                    zIndex: 200,
                },
                HAMNAV: {
                    width: '50px',
                    height: '50px',
                    display: state.hamMenuDis,
                    alignItems: "center",
                    flex: 1,
                    cursor: 'pointer',
                    flexDirection: 'column'

                },
                smHAMNAV: {
                    width: '50px',
                    height: '50px',
                    display: state.hamSmDis,
                    alignItems: "center",
                    flex: 1,
                    cursor: 'pointer',
                    flexDirection: 'column'

                },
                mdHAMNAV: {
                    width: '50px',
                    height: '50px',
                    display: state.hamMdDis,
                    alignItems: "center",
                    flex: 1,
                    cursor: 'pointer',
                    flexDirection: 'column'
                },
                HAMLINES: {
                    display: 'flex',
                    width: '25px',
                    height: '5px',
                    backgroundColor: 'black',
                    margin: '3px 0',
                },
                hamestnav: {
                    visibility: 'hidden',
                    width: '100%',
                    flexDirection: 'column',
                    position: state.hamPosition,
                    top: state.hamTop,
                    left: state.hamLeft,
                    background: state.hamBackground,
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: state.hamShadow,
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
                },
                smhamestnav: {
                    visibility: show ? 'visible' : 'hidden',
                    width: '100%',
                    flexDirection: 'column',
                    position: state.hamPosition,
                    top: state.hamTop,
                    left: state.hamLeft,
                    background: state.hamBackground,
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    alignItems: 'center',
                    boxShadow: state.hamShadow,
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,

                },
                mdhamestnav: {
                    visibility: show ? 'visible' : 'hidden',
                    width: '100%',
                    flexDirection: 'column',
                    position: state.hamPosition,
                    top: state.hamTop,
                    left: state.hamLeft,
                    background: state.hamBackground,
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: state.hamShadow,
                    animationIterationCount: state.animationIterationCount,
                    animationTimingFunction: state.animationTimingFunction,
                    animationName: state.animationName,
                    animationDuration: state.animationDuration,
                    transformOrigin: state.transformOrigin,
                    animationFillMode: state.animationFillMode,
                }

            }
        // case (type = '2'):
        //     cursor = "pointer"
        //     return {

        //     }
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