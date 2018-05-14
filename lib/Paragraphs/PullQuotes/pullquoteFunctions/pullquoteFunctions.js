export default function pullQuoteFunction(type, props, state, self) {
    let cursor = ""
    let animationIterationCount = props.aniCount
    let animationTimingFunction = props.aniTime
    let animationName = props.aniName
    let animationDuration = props.aniDur
    let transform = props.transform
    let transformOrigin = props.transformOrigin
    let animationFillMode = props.aniFillMode
    let smdis = props.smDis
    let mddis = props.mdDis
    switch (type) {
        case '1':
            cursor = "pointer"
            return {
                pullquotestyles: {
                    padding: "0px 12%",
                    margin: "20px 0 40px 0",
                    position: "relative",
                },
                cite: {
                    fontSize: "1.333em",
                    paddingLeft: "50px",
                    color: "lightslategray",
                    display: "block",
                    position: "absolute",
                    bottom: "-30px",
                },
                smpullquotestyles: {
                    display: smdis,
                    padding: "0px 12%",
                    margin: "20px 0 40px 0",
                    position: "relative",
                },
                mdcite: {
                    display: smdis,
                    fontSize: "1.333em",
                    paddingLeft: "50px",
                    color: "lightslategray",
                    display: "block",
                    position: "absolute",
                    bottom: "-30px",

                },
                mdpullquotestyles: {
                    display: mddis,
                    padding: "0px 12%",
                    margin: "20px 0 40px 0",
                    position: "relative",
                },
                mdcite: {
                    display: mddis,
                    fontSize: "1.333em",
                    paddingLeft: "50px",
                    color: "lightslategray",
                    display: "block",
                    position: "absolute",
                    bottom: "-30px",
                }
            }
        case '2':
            cursor = "pointer"
            return {
                pullquotestyles: {
                    width: "250px",
                    padding: "5px",
                    fontSize: "1.333em",
                    borderTop: "2px solid lightgray",
                    borderBottom: "2px solid lightgray",
                    margin: "0 auto",
                },
                text: {
                    fontSize: "1.333em",
                    margin: "5px",
                },
                cite: {
                    margin: "5px",
                    color: "lightslategray",
                },
                smpullquotestyles: {
                    display: smdis,
                    width: "250px",
                    padding: "5px",
                    fontSize: "1.333em",
                    borderTop: "2px solid lightgray",
                    borderBottom: "2px solid lightgray",
                    margin: "0 auto",
                },
                smtext: {
                    display: smdis,
                    fontSize: "1.333em",
                    margin: "5px",
                },
                smcite: {
                    display: smdis,
                    margin: "5px",
                    color: "lightslategray",

                },
                mdpullquotestyles: {
                    display: mddis,
                    width: "250px",
                    padding: "5px",
                    fontSize: "1.333em",
                    borderTop: "2px solid lightgray",
                    borderBottom: "2px solid lightgray",
                    margin: "0 auto",
                },
                mdtext: {
                    display: mddis,
                    fontSize: "1.333em",
                    margin: "5px",
                },
                mdcite: {
                    display: mddis,
                    margin: "5px",
                    color: "lightslategray",
                }
            }
        default:
            return
    }
}