import React from 'react';
import '../css/reset.css';
import '../css/animations.css';
import Image from "../Images/Image"
import StyleSheet from 'nestingstyles';
import brandFunction from "./brandFunctions/brandFunctions";
export default class Brand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'row',
            size: props.size || 'tn',
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            childs: [],
            id: props.id,
            className: props.className,
            box: props.box,
            styledBrand: '',
            keys: ''
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledBrand, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        const tempkey = Math.random()
        if (this.state.box === "1") {
            use = brandFunction("1", props, state, self)
            styledBrand = [
                <div key={tempkey} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="square"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                    <p style={use.BRAND.brand_name}>{CHILDS[1]}</p>
                </div>
            ]

        } else if (this.state.box === "2") {
            use = brandFunction("2", props, state, self)
            styledBrand = [
                <div key={tempkey} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="rectangle"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                </div>
            ]

        } else if (this.state.box === "3") {
            use = brandFunction("3", props, state, self)
            styledBrand = [
                <div key={tempkey} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="square"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                </div>
            ]

        } else if (this.state.box === "4") {
            use = brandFunction("4", props, state, self)
            styledBrand = [
                <div key={tempkey} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="square"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                </div>
            ]

        } else if (this.state.box === "5") {
            use = brandFunction("5", props, state, self)
            styledBrand = [
                <div key={tempkey} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    {CHILDS}
                </div>
            ]
        } else {
            use = brandFunction("custom", props, state, self)
            styledBrand = [
                <div key={tempkey} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="square"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                    <p style={use.BRAND.brand_name}>{CHILDS[1]}</p>
                </div>
            ]
        }
        return this.setState({ childs: CHILDS, styledBrand: styledBrand, keys: tempkey })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledBrand, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        if (this.state.box === "1") {
            use = brandFunction("1", props, state, self)
            styledBrand = [
                <div key={this.state.keys} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="square"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                    <p style={use.BRAND.brand_name}>{CHILDS[1]}</p>
                </div>
            ]

        } else if (this.state.box === "2") {
            use = brandFunction("2", props, state, self)
            styledBrand = [
                <div key={this.state.keys} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="rectangle"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                </div>
            ]

        } else if (this.state.box === "3") {
            use = brandFunction("3", props, state, self)
            styledBrand = [
                <div key={this.state.keys} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="square"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                </div>
            ]

        } else if (this.state.box === "4") {
            use = brandFunction("4", props, state, self)
            styledBrand = [
                <div key={this.state.keys} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="square"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                </div>
            ]

        } else if (this.state.box === "5") {
            use = brandFunction("5", props, state, self)
            styledBrand = [
                <div key={this.state.keys} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    {CHILDS}
                </div>
            ]
        } else {
            use = brandFunction("custom", props, state, self)
            styledBrand = [
                <div key={this.state.keys} style={use.BRAND.brand}
                    id={this.state.id}
                    className={this.state.className}>
                    <Image
                        box="square"
                        size={this.state.size}>
                        {CHILDS[0]}
                        logo
                    </Image>
                    <p style={use.BRAND.brand_name}>{CHILDS[1]}</p>
                </div>
            ]
        }
        return this.setState({ childs: CHILDS, styledBrand: styledBrand })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledBrand}
            </React.Fragment>
        )
    }
}