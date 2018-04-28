import React, {Component} from 'react';
import '../css/reset.css'
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
export default class Card3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            boxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            hovBoxShadow: props.hovShadow || '1px 8px 16px 0 rgba(0,0,0,0.2)',
            revBoxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            borderRadius: props.corners,
            height: props.height || '398px',
            width: props.wdith || '250px',
            id: props.id,
            className: props.className,
            smDis: props.smDis,
            mdDis: props.mdDis,
        }
    }
    componentDidMount() {
        const CHILDS = React.Children.toArray(this.props.children)
        this.setState({ childs: CHILDS })
    }
    componentWillReceiveProps(newProps) {
        const CHILDS = React.Children.toArray(newProps.children)
        return this.setState({ childs: CHILDS })
    }
    render() {
        const CARDSTYLE = StyleSheet.create({
            cardstyle: {
            margin: '10px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: this.state.boxShadow,
            transition: '0.3s',
            height: this.state.height,
            width: this.state.width,
            borderRadius: this.state.borderRadius,
        },
        '@media screen and (max-width: 768px)': {
            cardstyle: {
                display: this.state.smDis,
            }
        },
        '@media screen and (min-width: 769px) and (max-width: 1200px)': {
            cardstyle: {
                display: this.state.mdDis,
            }
        },
    })
    const CARDHEADING = StyleSheet.create({
        cardheading: {

        },
        '@media screen and (max-width: 768px)': {
            cardheading: {
                display: this.state.smDis,
            }
        },
        '@media screen and (min-width: 769px) and (max-width: 1200px)': {
            cardheading: {
                display: this.state.mdDis,
            }
        },
    })
    const CARDBODY = StyleSheet.create({
        cardbody: {

        },
        '@media screen and (max-width: 768px)': {
            cardbody: {
                display: this.state.smDis,
            }
        },
        '@media screen and (min-width: 769px) and (max-width: 1200px)': {
            cardbody: {
                display: this.state.mdDis,
            }
        },
    })
    const CARDCONTENT = StyleSheet.create({
        cardcontent: {
            textAlign: 'center',
        },
        '@media screen and (max-width: 768px)': {
            cardcontent: {
                display: this.state.smDis,
            }
        },
        '@media screen and (min-width: 769px) and (max-width: 1200px)': {
            cardcontent: {
                display: this.state.mdDis,
            }
        },
    })
        const ITEM = StyleSheet.create({
            item:{
            padding: '20px',
            borderBottom: '1px solid #eee'
        },
        '@media screen and (max-width: 768px)': {
            item: {
                display: this.state.smDis,
            }
        },
        '@media screen and (min-width: 769px) and (max-width: 1200px)': {
            item: {
                display: this.state.mdDis,
            }
        },
    })
        return (
            <div style={CARDSTYLE.cardstyle}
                id={this.state.id}
                className={this.state.className}
                onMouseEnter={() => this.setState({ boxShadow: this.state.hovBoxShadow })}
                onMouseLeave={() => this.setState({ boxShadow: this.state.revBoxShadow })}>
                <ul style={CARDCONTENT.cardcontent}>
                    <li style={ITEM.item}>{this.state.childs[0]}</li>
                    <li style={ITEM.item}>{this.state.childs[1]}</li>
                    <li style={ITEM.item}>{this.state.childs[2]}</li>
                    <li style={ITEM.item}>{this.state.childs[3]}</li>
                    <li style={ITEM.item}>{this.state.childs[4]}</li>
                    <li style={ITEM.item}>{this.state.childs[5]}</li>
                    <li style={ITEM.item}>{this.state.childs[6]}</li>
                </ul>
            </div>
        )
    }

}