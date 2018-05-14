export default function heroFunction(type, props, state, self) {
    let cursor = "";

    let background = props.background
    let backgroundImage = props.image
    let backgroundRepeat = props.imageRepeat || 'no-repeat'
    let backgroundPosition = props.backgroundPosition || 'center'
    let backgroundSize = props.imageSize || 'cover'
    let width = props.width || '100%'
    let height = props.height ||  "400px"
    let bottomBoxWidth = props.bottomBoxWidth || '100%'
    let bottomBoxHeight = props.bottomBoxHeight || '25%'
    let bottomBoxPadding = props.bottomBoxPadding
    let bottomBoxBackgroundColor = props.bottomBoxBC || 'rgba(0, 0, 0, 0.5)'
    let smdis = props.smDis || 'flex'
    let mddis = props.mdDis || 'flex'
    switch (type) {
        case '1':
            cursor = "pointer"
            return {
                herostyle: {
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                smherostyle: {
                    display: smdis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center'

                },
                mdherostyle: {
                    display: mddis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }
        case '2':
            cursor = "pointer"
            return {
                herostyle: {
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                },
                bottombackground: {
                    backgroundColor: bottomBoxBackgroundColor,
                    width: bottomBoxWidth,
                    height: bottomBoxHeight,
                    padding: bottomBoxPadding,
                    overflow: 'hidden',
                },
                smherostyle: {
                    display: smdis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                },
                mderostyle: {
                    display: mddis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                }
            }
        case '3':
            cursor = "pointer"
            return {
                herostyle: {
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                smherostyle: {
                    display: smdis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center'

                },
                mdherostyle: {
                    display: mddis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }
        case '4':
            cursor = "pointer"
            return {
                herostyle: {
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                smherostyle: {
                    display: smdis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center'

                },
                mdherostyle: {
                    display: mddis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }
        case '5':
            cursor = "pointer"
            return {
                herostyle: {
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    display: 'flex',
                    flex: "1 0 auto",
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                },
                smherostyle: {
                    display: smdis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'flex-end',
                    justifyContent: 'center',

                },
                mdherostyle: {
                    display: mddis,
                    background: background,
                    backgroundImage: backgroundImage,
                    backgroundRepeat: backgroundRepeat,
                    backgroundPosition: backgroundPosition,
                    backgroundSize: backgroundSize,
                    width: width,
                    height: height,
                    flex: "1 0 auto",
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                }
            }
        default:
            return
    }
}