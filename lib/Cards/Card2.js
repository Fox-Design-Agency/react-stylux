import React, { Component } from 'react';
import '../css/reset.css'
import '../css/animations.css';
import StyleSheet from 'nestingstyles';
export default class Card2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            childs: '',
            boxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            hovBoxShadow: props.hovShadow || '1px 8px 16px 0 rgba(0,0,0,0.2)',
            revBoxShadow: props.shadow || '1px 4px 8px 0 rgba(0,0,0,0.2)',
            btnText: props.btnText || 'Contact',
            btnOnClick: props.btnClick,
            borderRadius: props.corners,
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
        const IMGSTYLE = StyleSheet.create({
            imgstyle: {
                height: '150px',
                width: '250px',
            },
            '@media screen and (max-width: 768px)': {
                imgstyle: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                imgstyle: {
                    display: this.state.mdDis,
                }
            },
        })
        const CARDHEADING = StyleSheet.create({
            cardheading: {
                textAlign: "center",
                fontWeight: "900",
                margin: "2px",
                maxWidth: "250px"
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
                display: 'flex',
                flexDirection: 'column',
                padding: '2px 16px',
                wordWrap: "break-word",
                maxWidth: "250px",
                maxHeight: "175px",
                overflow: "hidden"
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
                display: 'flex',
                flexDirection: 'column',
                height: '175px',
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
        const BTNSTYLE = StyleSheet.create({
            btnstyle: {
                backgroundColor: 'black',
                color: 'white',
                height: '30px',
                border: 'none',
                cursor: 'pointer',
            },
            '@media screen and (max-width: 768px)': {
                btnstyle: {
                    display: this.state.smDis,
                }
            },
            '@media screen and (min-width: 769px) and (max-width: 1200px)': {
                btnstyle: {
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
                <img
                    src={this.state.childs[0]}
                    alt={this.state.childs[1]}
                    style={IMGSTYLE.imgstyle} />
                <div style={CARDCONTENT.cardcontent}>
                    <h5 style={CARDHEADING.cardheading}>{this.state.childs[2]}</h5>
                    <p style={CARDBODY.cardbody}>{this.state.childs[3]}</p>
                </div>
                <button style={BTNSTYLE.btnstyle} onClick={this.state.btnOnClick}>{this.state.btnText}</button>
            </div>
        )
    }

}