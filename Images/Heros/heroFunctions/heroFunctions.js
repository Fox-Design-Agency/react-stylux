'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = heroFunction;
function heroFunction(type, props, state, self) {
    var cursor = "";

    var background = props.background;
    var backgroundImage = props.image;
    var backgroundRepeat = props.imageRepeat || 'no-repeat';
    var backgroundPosition = props.backgroundPosition || 'center';
    var backgroundSize = props.imageSize || 'cover';
    var width = props.width || '100%';
    var height = props.height || "400px";
    var bottomBoxWidth = props.bottomBoxWidth || '100%';
    var bottomBoxHeight = props.bottomBoxHeight || '25%';
    var bottomBoxPadding = props.bottomBoxPadding;
    var bottomBoxBackgroundColor = props.bottomBoxBC || 'rgba(0, 0, 0, 0.5)';
    var smdis = props.smDis || 'flex';
    var mddis = props.mdDis || 'flex';
    switch (type) {
        case '1':
            cursor = "pointer";
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
                    justifyContent: 'center'
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
            };
        case '2':
            cursor = "pointer";
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
                    justifyContent: 'center'
                },
                bottombackground: {
                    backgroundColor: bottomBoxBackgroundColor,
                    width: bottomBoxWidth,
                    height: bottomBoxHeight,
                    padding: bottomBoxPadding,
                    overflow: 'hidden'
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
                    justifyContent: 'center'
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
                    justifyContent: 'center'
                }
            };
        case '3':
            cursor = "pointer";
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
                    justifyContent: 'center'
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
            };
        case '4':
            cursor = "pointer";
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
                    justifyContent: 'center'
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
            };
        case '5':
            cursor = "pointer";
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
                    justifyContent: 'center'
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
                    alignItems: 'flex-end',
                    justifyContent: 'center'
                }
            };
        default:
            return;
    }
}