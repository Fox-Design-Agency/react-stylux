'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = cardFunction;
function cardFunction(type, props, state, self) {
    var cursor = "";
    var boxShadow = props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)';
    var hovBoxShadow = props.hovShadow || '1px 8px 16px 0 rgba(0,0,0,0.2)';
    var revBoxShadow = props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)';
    var borderRadius = props.corners;
    var smDis = props.smDis;
    var mdDis = props.mdDis;

    switch (type) {
        case '1':
            cursor = "pointer";
            boxShadow = arguments[4] || boxShadow;
            return {
                changeHover: function changeHover() {
                    var boxShadow = hovBoxShadow;
                    self.renderStuff(boxShadow);
                },
                changeHoverBack: function changeHoverBack() {
                    var boxShadow = revBoxShadow;
                    self.renderStuff(boxShadow);
                },
                cardstyle: {
                    margin: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    borderRadius: borderRadius
                },
                imgstyle: {
                    height: '300px',
                    width: '250px'
                },
                cardheading: {
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                cardbody: {
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                cardcontent: {
                    display: 'flex',
                    flex: "1 0 auto",
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"
                },

                smcardstyle: {
                    display: smDis,
                    margin: '10px',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    borderRadius: borderRadius
                },
                smimgstyle: {
                    display: smDis,
                    height: '300px',
                    width: '250px'
                },
                smcardheading: {
                    display: smDis,
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                smcardbody: {
                    display: smDis,
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                smcardcontent: {
                    display: smDis,
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"

                },
                mdcardstyle: {
                    display: mdDis,
                    margin: '10px',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    borderRadius: borderRadius
                },
                mdimgstyle: {
                    display: mdDis,
                    height: '300px',
                    width: '250px'
                },
                mdcardheading: {
                    display: mdDis,
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                mdcardbody: {
                    display: mdDis,
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                mdcardcontent: {
                    display: mdDis,
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"
                }
            };
        case '2':
            cursor = "pointer";
            boxShadow = arguments[4] || boxShadow;
            return {
                changeHover: function changeHover() {
                    var boxShadow = hovBoxShadow;
                    self.renderStuff(boxShadow);
                },
                changeHoverBack: function changeHoverBack() {
                    var boxShadow = revBoxShadow;
                    self.renderStuff(boxShadow);
                },
                cardstyle: {
                    display: 'flex',
                    margin: '10px',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    borderRadius: borderRadius
                },
                imgstyle: {
                    height: '300px',
                    width: '250px'
                },
                cardheading: {
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                cardbody: {
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                cardcontent: {
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"
                },
                btnstyle: {
                    backgroundColor: 'black',
                    color: 'white',
                    height: '30px',
                    border: 'none',
                    cursor: 'pointer'
                },

                smcardstyle: {
                    display: smDis,
                    margin: '10px',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    borderRadius: borderRadius
                },
                smimgstyle: {
                    display: smDis,
                    height: '300px',
                    width: '250px'
                },
                smcardheading: {
                    display: smDis,
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                smcardbody: {
                    display: smDis,
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                smcardcontent: {
                    display: smDis,
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"
                },
                smbtnstyle: {
                    display: smDis,
                    backgroundColor: 'black',
                    color: 'white',
                    height: '30px',
                    border: 'none',
                    cursor: 'pointer'

                },
                mdcardstyle: {
                    display: mdDis,
                    margin: '10px',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    borderRadius: borderRadius
                },
                mdimgstyle: {
                    display: mdDis,
                    height: '300px',
                    width: '250px'
                },
                mdcardheading: {
                    display: mdDis,
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                mdcardbody: {
                    display: mdDis,
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                mdcardcontent: {
                    display: mdDis,
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"
                },
                mdbtnstyle: {
                    display: mdDis,
                    backgroundColor: 'black',
                    color: 'white',
                    height: '30px',
                    border: 'none',
                    cursor: 'pointer'
                }
            };
        case '3':
            cursor = "pointer";
            var height = height || '398px';
            var width = width || '250px';
            boxShadow = arguments[4] || boxShadow;
            return {
                changeHover: function changeHover() {
                    var boxShadow = hovBoxShadow;
                    self.renderStuff(boxShadow);
                },
                changeHoverBack: function changeHoverBack() {
                    var boxShadow = revBoxShadow;
                    self.renderStuff(boxShadow);
                },
                cardstyle: {
                    display: 'flex',
                    margin: '10px',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    height: height,
                    width: width,
                    borderRadius: borderRadius
                },
                cardheading: {
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                cardbody: {
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                cardcontent: {
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"
                },
                item: {
                    padding: '20px',
                    borderBottom: '1px solid #eee'
                },

                smcardstyle: {
                    display: smDis,
                    margin: '10px',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    height: height,
                    width: width,
                    borderRadius: borderRadius
                },
                smcardheading: {
                    display: smDis,
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                smcardbody: {
                    display: smDis,
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                smcardcontent: {
                    display: smDis,
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"
                },
                smitem: {
                    display: smDis,
                    padding: '20px',
                    borderBottom: '1px solid #eee'

                },
                mdcardstyle: {
                    display: mdDis,
                    margin: '10px',
                    flexDirection: 'column',
                    boxShadow: boxShadow,
                    transition: '0.3s',
                    height: height,
                    width: width,
                    borderRadius: borderRadius
                },
                mdimgstyle: {
                    display: mdDis,
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                mdcardheading: {
                    display: mdDis,
                    textAlign: "center",
                    fontWeight: "900",
                    margin: "2px",
                    maxWidth: "250px"
                },
                mdcardbody: {
                    display: mdDis,
                    margin: "2px",
                    maxWidth: "250px",
                    maxHeight: "175px",
                    overflow: "hidden"
                },
                mdcardcontent: {
                    display: mdDis,
                    flexDirection: 'column',
                    padding: '2px 16px',
                    wordWrap: "break-word",
                    maxWidth: "250px"
                },
                mditem: {
                    display: mdDis,
                    padding: '20px',
                    borderBottom: '1px solid #eee'
                }
            };
        default:
            return;
    }
}