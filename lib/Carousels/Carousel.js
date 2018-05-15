import React from 'react';
import MediaQuery from "react-responsive";
import '../css/reset.css';
import '../css/animations.css';
import '../css/SuperStyleSheet.css';
import carouselFunction from "./carouselFunctions/carouselFunctions";
export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages: [],
            cur: 0,
            slideTimer: props.slideTimer || '5000',
            id: props.id,
            leftArrowid: props.leftArrowid,
            rightArrowid: props.rightArrowid,
            className: props.className,
            leftArrowClassName: props.leftArrowClassName,
            rightArrowClassName: props.rightArrowClassName,
            intervalTime: '',
            box: props.box,
            vars: props.vars,
            styledCarousel: '',
            keys: '',
            dots: '',
        }
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        // this.ishovering = this.ishovering.bind(this);
        // this.isnolongerhovering = this.isnolongerhovering.bind(this);
    }

    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledCarousel, DOTS, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(this.props.children)
        const intervalTime = setInterval(this.slideRight, this.state.slideTimer)
        let tempKeys = []
        for (let i = 0; i <= CHILDS.length + 4; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        let RENDERSLIDES = ''
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("1", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = carouselFunction("1", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("2", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        DOTS = CHILDS.map((x, i) => {
                            return (
                                <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>
                        ]
                    default:
                        use = carouselFunction("2", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        DOTS = CHILDS.map((x, i) => {
                            return (
                                <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("3", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        DOTS = CHILDS.map((x, i) => {
                            return (
                                <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>
                        ]
                    default:
                        use = carouselFunction("3", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        DOTS = CHILDS.map((x, i) => {
                            return (
                                <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>
                        ]
                }
                break;

            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("4", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i, arr) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {arr[i]}
                                        {arr[i + 1]}
                                        {arr[i + 2]}
                                        {arr[i + 3]}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = carouselFunction("4", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i, arr) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {arr[i]}
                                        {arr[i + 1]}
                                        {arr[i + 2]}
                                        {arr[i + 3]}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("5", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = carouselFunction("5", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={tempKeys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={tempKeys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                use = carouselFunction("2", props, state, self);
                RENDERSLIDES = CHILDS.map((x, i) => {
                    return (
                        <div key={tempKeys[i + 3]} style={use.SLIDE}>
                            <div style={use.SLIDE_CONTENT}>
                                {x}
                            </div>
                        </div>
                    )
                })
                DOTS = CHILDS.map((x, i) => {
                    return (
                        <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                    )
                })
                styledCarousel = [
                    <MediaQuery key={tempKeys[0]} query="(min-width: 1224px)">
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {RENDERSLIDES[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {DOTS}
                        </div>
                    </MediaQuery>,
                    <MediaQuery key={tempKeys[1]} minWidth={768} maxWidth={1223}>
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {RENDERSLIDES[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {DOTS}
                        </div>
                    </MediaQuery>,
                    <MediaQuery key={tempKeys[2]} maxWidth={767}>
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {RENDERSLIDES[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {DOTS}
                        </div>
                    </MediaQuery>
                ]
        }
        this.setState({
            sliderImages: RENDERSLIDES,
            intervalTime: intervalTime,
            styledCarousel: styledCarousel,
            keys: tempKeys,
            dots: DOTS
        })
    }
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledCarousel, DOTS, use = '';
        const self = this;
        const CHILDS = React.Children.toArray(newProps.children)
        const intervalTime = setInterval(this.slideRight, this.state.slideTimer)
        let RENDERSLIDES = ''
        switch (this.state.box) {
            case "1":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("1", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = carouselFunction("1", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                            >
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER}>
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("2", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        DOTS = CHILDS.map((x, i) => {
                            return (
                                <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>
                        ]
                    default:
                        use = carouselFunction("2", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        DOTS = CHILDS.map((x, i) => {
                            return (
                                <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("3", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        DOTS = CHILDS.map((x, i) => {
                            return (
                                <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>
                        ]
                    default:
                        use = carouselFunction("3", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        DOTS = CHILDS.map((x, i) => {
                            return (
                                <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {RENDERSLIDES[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {DOTS}
                                </div>
                            </MediaQuery>
                        ]
                }
                break;

            case "4":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("4", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i, arr) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {arr[i]}
                                        {arr[i + 1]}
                                        {arr[i + 2]}
                                        {arr[i + 3]}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = carouselFunction("4", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i, arr) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {arr[i]}
                                        {arr[i + 1]}
                                        {arr[i + 2]}
                                        {arr[i + 3]}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                                <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                            </div></MediaQuery>
                        ]
                }
                break;
            case "5":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("5", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>
                        ]
                    default:
                        use = carouselFunction("5", props, state, self);
                        RENDERSLIDES = CHILDS.map((x, i) => {
                            return (
                                <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                                    <div style={use.SLIDE_CONTENT}>
                                        {x}
                                    </div>
                                </div>
                            )
                        })
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER} >
                                    {RENDERSLIDES[this.state.cur]}
                                </div>
                            </div></MediaQuery>
                        ]
                }
                break;
            default:
                use = carouselFunction("2", props, state, self);
                RENDERSLIDES = CHILDS.map((x, i) => {
                    return (
                        <div key={this.state.keys[i + 3]} style={use.SLIDE}>
                            <div style={use.SLIDE_CONTENT}>
                                {x}
                            </div>
                        </div>
                    )
                })
                DOTS = CHILDS.map((x, i) => {
                    return (
                        <span key={i} style={use.CIRCLES} onClick={() => this.currentSlide(i)}></span>
                    )
                })
                styledCarousel = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {RENDERSLIDES[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {DOTS}
                        </div>
                    </MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {RENDERSLIDES[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {DOTS}
                        </div>
                    </MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {RENDERSLIDES[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {DOTS}
                        </div>
                    </MediaQuery>
                ]
        }
        this.setState({
            sliderImages: RENDERSLIDES,
            intervalTime: intervalTime,
            styledCarousel: styledCarousel,
            dots: DOTS
        })
    }


    componentWillUnmount() {
        return clearInterval(this.state.intervalTime);
    }
    slideLeft() {
        let styledCarousel, use = ''
        const props = this.props;
        const state = this.state;
        const self = this;
        if (this.state.cur === 0) {
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("1", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("1", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>
                            ]
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("2", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                        default:
                            use = carouselFunction("2", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("3", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>

                            ]
                        default:
                            use = carouselFunction("3", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("4", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("4", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>
                            ]
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("5", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("5", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>
                            ]
                    }
                    break;
                default:
                    use = carouselFunction("2", props, state, self);
                    styledCarousel = [
                        <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>,
                        <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>,
                        <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>
                    ]
            }
            return this.setState({
                cur: this.state.sliderImages.length - 1,
                animationIterationCount: '1',
                animationTimingFunction: 'ease-in',
                animationName: 'slideInRight',
                animationDuration: '0.75s',
                styledCarousel: styledCarousel,
            })
        } else {
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("1", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("1", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>
                            ]
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("2", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                        default:
                            use = carouselFunction("2", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("3", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                        default:
                            use = carouselFunction("3", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("4", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("4", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>
                            ]
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("5", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("5", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>
                            ]
                    }
                    break;
                default:
                    use = carouselFunction("2", props, state, self);
                    styledCarousel = [
                        <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>,
                        <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>,
                        <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>
                    ]
            }
            return this.setState({
                cur: this.state.cur - 1,
                animationIterationCount: '1',
                animationTimingFunction: 'ease-in',
                animationName: 'slideInRight',
                animationDuration: '0.75s',
                styledCarousel: styledCarousel
            })
        }
    }
    slideRight() {
        let styledCarousel, use = ''
        const props = this.props;
        const state = this.state;
        const self = this;
        if (this.state.cur >= this.state.sliderImages.length - 1) {
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("1", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("1", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>
                            ]
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("2", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                        default:
                            use = carouselFunction("2", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("3", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                        default:
                            use = carouselFunction("3", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("4", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("4", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>
                            ]
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("5", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("5", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>
                            ]
                    }
                    break;
                default:
                    use = carouselFunction("2", props, state, self);
                    styledCarousel = [
                        <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>,
                        <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>,
                        <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>
                    ]
            }
            return this.setState({
                cur: 0,
                animationIterationCount: '1',
                animationTimingFunction: 'ease',
                animationName: 'slideInLeft',
                animationDuration: '0.75s',
                styledCarousel: styledCarousel
            })

        } else {
            switch (this.state.box) {
                case "1":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("1", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("1", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}
                                >
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div></MediaQuery>
                            ]
                    }
                    break;
                case "2":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("2", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                        default:
                            use = carouselFunction("2", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                    }
                    break;
                case "3":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("3", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                        default:
                            use = carouselFunction("3", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div>
                                    <div style={use.CIRCLESDIV}>
                                        {this.state.dots}
                                    </div>
                                </MediaQuery>
                            ]
                    }
                    break;
                case "4":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("4", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("4", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                    <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                        <div style={use.SLIDER}>
                                            {this.state.sliderImages[this.state.cur]}
                                        </div>
                                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                    </div></MediaQuery>
                            ]
                    }
                    break;
                case "5":
                    switch (this.state.vars) {
                        case "1":
                            use = carouselFunction("5", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>
                            ]
                        default:
                            use = carouselFunction("5", props, state, self);
                            styledCarousel = [
                                <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)"><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>,
                                <MediaQuery key={this.state.keys[2]} maxWidth={767}><div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER} >
                                        {this.state.sliderImages[this.state.cur]}
                                    </div>
                                </div></MediaQuery>
                            ]
                    }
                    break;
                default:
                    use = carouselFunction("2", props, state, self);
                    styledCarousel = [
                        <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>,
                        <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>,
                        <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                            <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                <div style={use.SLIDER}>
                                    {this.state.sliderImages[this.state.cur]}
                                </div>
                            </div>
                            <div style={use.CIRCLESDIV}>
                                {this.state.dots}
                            </div>
                        </MediaQuery>
                    ]
            }
            return this.setState({
                cur: this.state.cur + 1,
                animationIterationCount: '1',
                animationTimingFunction: 'ease',
                animationName: 'slideInLeft',
                animationDuration: '0.75s',
                styledCarousel: styledCarousel
            })
        }
    }
    currentSlide(x) {
        let styledCarousel, use = ''
        const props = this.props;
        const state = this.state;
        const self = this;
        switch (this.state.box) {
            case "2":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("2", props, state, self);
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>
                        ]
                    default:
                        use = carouselFunction("2", props, state, self);
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>
                        ]
                }
                break;
            case "3":
                switch (this.state.vars) {
                    case "1":
                        use = carouselFunction("3", props, state, self);
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>
                        ]
                    default:
                        use = carouselFunction("3", props, state, self);
                        styledCarousel = [
                            <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>,
                            <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                                <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                                    <div style={use.SLIDER}>
                                        {this.state.sliderImages[x]}
                                    </div>
                                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                                </div>
                                <div style={use.CIRCLESDIV}>
                                    {this.state.dots}
                                </div>
                            </MediaQuery>
                        ]
                }
                break;
            default:
                use = carouselFunction("2", props, state, self);
                styledCarousel = [
                    <MediaQuery key={this.state.keys[0]} query="(min-width: 1224px)">
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {this.state.sliderImages[x]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </MediaQuery>,
                    <MediaQuery key={this.state.keys[1]} minWidth={768} maxWidth={1223}>
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {this.state.sliderImages[x]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </MediaQuery>,
                    <MediaQuery key={this.state.keys[2]} maxWidth={767}>
                        <div style={use.WRAP} id={this.state.id} className={this.state.className}>
                            <div style={use.SLIDER}>
                                {this.state.sliderImages[x]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </MediaQuery>
                ]
        }
        this.setState({ cur: x, styledCarousel: styledCarousel })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.styledCarousel}
            </React.Fragment>
        )
    }
}