import React, {Component} from 'react';
import '../../css/SuperStyleSheet.css';
import StyleSheet from 'nestingstyles';
export default class NumberList2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAmount: props.listAmount || '1',
            listItem: [],
            id: props.id,
            className: props.className,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            width: props.width || "100%",
        }
    }
    componentDidMount() {
        let listItems = []
        let nestedItems = []
        const CHILDS = React.Children.toArray(this.props.children)
        let tempItems = CHILDS.map((x) => x)
        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
            for (var w = 0; w < +this.state.listAmount; w += 1) {
                nestedItems.push(tempItems[w])
            }
            listItems.push(nestedItems)
            nestedItems = []
            tempItems.splice(0, this.state.listAmount)
        }
        this.setState({ listItem: listItems })
    }
    componentWillReceiveProps(newProps) {
        let listItems = []
        let nestedItems = []
        const CHILDS = React.Children.toArray(newProps.children)
        let tempItems = CHILDS.map((x) => x)
        for (var q = 0; q < CHILDS.length; q += +this.state.listAmount) {
            for (var w = 0; w < +this.state.listAmount; w += 1) {
                nestedItems.push(tempItems[w])
            }
            listItems.push(nestedItems)
            nestedItems = []
            tempItems.splice(0, this.state.listAmount)
        }
        this.setState({ listItem: listItems })
    }
    render() {
        const LISTSTYLE = StyleSheet.create({
            liststyle: {
                color: this.state.color,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                lineHeight: this.state.lineHeight,
                fontWeight: this.state.fontWeight,
                paddingLeft: this.state.paddingLeft,
                position: 'relative',
                width: this.state.width,

            },
            '@media screen and (max-width: 768px)': {
                liststyle: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                liststyle: {
                    display: this.state.mdDis,
                }
            },
        })
        const LISTITEMSTYLE = StyleSheet.create({
            listitemstyle: {
            paddingLeft: '70px',
            counterIncrement: 'aCounter',

        },
        '@media screen and (max-width: 768px)': {
            listitemstyle: {
                display: this.state.smDis,
            }
        },
        '@media screen and (min-width: 769px) and (max-width: 1200px)': {
            listitemstyle: {
                display: this.state.mdDis,
            }
        },
    })
        const LIST = this.state.listItem.map((x, i) => {
            return (

                <li key={i} style={LISTITEMSTYLE.listitemstyle}>{x}</li>

            )
        })
        return (
            <ol style={LISTSTYLE.liststyle} id={this.state.id} className={`bigList ${this.state.className}`}>
                {LIST}
            </ol>
        )
    }
}