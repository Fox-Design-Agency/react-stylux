import React from 'react';
import StyleSheet from 'nestingstyles';
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
            arrowColor: props.arrowColor || 'white',
            background: props.background || 'black',
            padding: props.padding,
            height: props.height || '450px',
            slideTimer: props.slideTimer || '5000',
            mainid: props.mainid,
            leftArrowid: props.leftArrowid,
            rightArrowid: props.rightArrowid,
            sliderid: props.sliderid,
            mainClassName: props.mainClassName,
            leftArrowClassName: props.leftArrowClassName,
            rightArrowClassName: props.rightArrowClassName,
            sliderClassName: props.sliderClassName,
            animationIterationCount: props.aniCount,
            animationTimingFunction: props.aniTime,
            animationName: props.aniName,
            animationDuration: props.aniDur,
            transformOrigin: props.transformOrigin,
            animationFillMode: props.aniFillMode,
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            intervalTime: '',
            box: props.box,
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
        for (let i = 0; i <= CHILDS.length + 2; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        let RENDERSLIDES = ''
        if (this.state.box === "1") {
            use = carouselFunction("1", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
                        <div style={use.SLIDE_CONTENT}>
                            {x}
                        </div>
                    </div>
                )
            })
            styledCarousel = [
                <div key={tempKeys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}
                >
                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                    <div style={use.SLIDER}>
                        {RENDERSLIDES[this.state.cur]}
                    </div>
                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = carouselFunction("2", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
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
                <React.Fragment key={tempKeys[0]}>
                    <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {RENDERSLIDES[this.state.cur]}
                        </div>
                    </div>
                    <div style={use.CIRCLESDIV}>
                        {DOTS}
                    </div>
                </React.Fragment>
            ]

        } else if (this.state.box === "3") {
            use = carouselFunction("3", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
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
                <React.Fragment key={tempKeys[0]}>
                    <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {RENDERSLIDES[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                    <div style={use.CIRCLESDIV}>
                        {DOTS}
                    </div>
                </React.Fragment>
            ]

        } else if (this.state.box === "4") {
            use = carouselFunction("4", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i, arr) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
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
                <div key={tempKeys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                    <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                        {RENDERSLIDES[this.state.cur]}
                    </div>
                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                </div>
            ]
        } else if (this.state.box === "5") {
            use = carouselFunction("5", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
                        <div style={use.SLIDE_CONTENT}>
                            {x}
                        </div>
                    </div>
                )
            })
            styledCarousel = [
                <div key={tempKeys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                    <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                        {RENDERSLIDES[this.state.cur]}
                    </div>
                </div>
            ]
        } else {
            use = carouselFunction("5", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
                        <div style={use.SLIDE_CONTENT}>
                            {x}
                        </div>
                    </div>
                )
            })
            styledCarousel = [
                <div key={tempKeys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                    <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                        {RENDERSLIDES[this.state.cur]}
                    </div>
                </div>
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
        let tempKeys = []
        for (let i = 0; i <= CHILDS.length + 2; i++) {
            tempKeys.push(tempKeys[i] = Math.random())
        }
        let RENDERSLIDES = ''
        if (this.state.box === "1") {
            use = carouselFunction("1", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
                        <div style={use.SLIDE_CONTENT}>
                            {x}
                        </div>
                    </div>
                )
            })
            styledCarousel = [
                <div key={tempKeys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}
                >
                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                    <div style={use.SLIDER}>
                        {RENDERSLIDES[this.state.cur]}
                    </div>
                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                </div>
            ]
        } else if (this.state.box === "2") {
            use = carouselFunction("2", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
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
                <React.Fragment key={tempKeys[0]}>
                    <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {RENDERSLIDES[this.state.cur]}
                        </div>
                    </div>
                    <div style={use.CIRCLESDIV}>
                        {DOTS}
                    </div>
                </React.Fragment>
            ]

        } else if (this.state.box === "3") {
            use = carouselFunction("3", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
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
                <React.Fragment key={tempKeys[0]}>
                    <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {RENDERSLIDES[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                    <div style={use.CIRCLESDIV}>
                        {DOTS}
                    </div>
                </React.Fragment>
            ]

        } else if (this.state.box === "4") {
            use = carouselFunction("4", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i, arr) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
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
                <div key={tempKeys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                    <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                    <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                        {RENDERSLIDES[this.state.cur]}
                    </div>
                    <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                </div>
            ]
        } else if (this.state.box === "5") {
            use = carouselFunction("5", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
                        <div style={use.SLIDE_CONTENT}>
                            {x}
                        </div>
                    </div>
                )
            })
            styledCarousel = [
                <div key={tempKeys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                    <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                        {RENDERSLIDES[this.state.cur]}
                    </div>
                </div>
            ]
        } else {
            use = carouselFunction("5", props, state, self);
            RENDERSLIDES = CHILDS.map((x, i) => {
                return (
                    <div key={tempKeys[i + 1]} style={use.SLIDE}>
                        <div style={use.SLIDE_CONTENT}>
                            {x}
                        </div>
                    </div>
                )
            })
            styledCarousel = [
                <div key={tempKeys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                    <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                        {RENDERSLIDES[this.state.cur]}
                    </div>
                </div>
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


    componentWillUnmount() {
        return clearInterval(this.state.intervalTime);
    }
    slideLeft() {
        let styledCarousel, use = ''
        const props = this.props;
        const state = this.state;
        const self = this;
        if (this.state.cur === 0) {
            if (this.state.box === "1") {
                use = carouselFunction("1", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}
                    >
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                ]
            } else if (this.state.box === "2") {
                use = carouselFunction("2", props, state, self);
                styledCarousel = [
                    <React.Fragment key={this.state.keys[0]}>
                        <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                            <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                                {this.state.sliderImages[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </React.Fragment>
                ]
            } else if (this.state.box === "3") {
                use = carouselFunction("3", props, state, self);
                styledCarousel = [
                    <React.Fragment key={this.state.keys[0]}>
                        <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                            <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                            <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                                {this.state.sliderImages[this.state.cur]}
                            </div>
                            <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </React.Fragment>
                ]

            } else if (this.state.box === "4") {
                use = carouselFunction("4", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                ]
            } else if (this.state.box === "5") {
                use = carouselFunction("5", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                    </div>
                ]
            } else {
                use = carouselFunction("5", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                    </div>
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
            if (this.state.box === "1") {
                use = carouselFunction("1", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}
                    >
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                ]
            } else if (this.state.box === "2") {
                use = carouselFunction("2", props, state, self);
                styledCarousel = [
                    <React.Fragment key={this.state.keys[0]}>
                        <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                            <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                                {this.state.sliderImages[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </React.Fragment>
                ]
            } else if (this.state.box === "3") {
                use = carouselFunction("3", props, state, self);
                styledCarousel = [
                    <React.Fragment key={this.state.keys[0]}>
                        <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                            <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                            <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                                {this.state.sliderImages[this.state.cur]}
                            </div>
                            <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </React.Fragment>
                ]

            } else if (this.state.box === "4") {
                use = carouselFunction("4", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                ]
            } else if (this.state.box === "5") {
                use = carouselFunction("5", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                    </div>
                ]
            } else {
                use = carouselFunction("5", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                    </div>
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
            if (this.state.box === "1") {
                use = carouselFunction("1", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}
                    >
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                ]
            } else if (this.state.box === "2") {
                use = carouselFunction("2", props, state, self);
                styledCarousel = [
                    <React.Fragment key={this.state.keys[0]}>
                        <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                            <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                                {this.state.sliderImages[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </React.Fragment>
                ]
            } else if (this.state.box === "3") {
                use = carouselFunction("3", props, state, self);
                styledCarousel = [
                    <React.Fragment key={this.state.keys[0]}>
                        <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                            <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                            <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                                {this.state.sliderImages[this.state.cur]}
                            </div>
                            <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </React.Fragment>
                ]

            } else if (this.state.box === "4") {
                use = carouselFunction("4", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                ]
            } else if (this.state.box === "5") {
                use = carouselFunction("5", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                    </div>
                ]
            } else {
                use = carouselFunction("5", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                    </div>
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
            if (this.state.box === "1") {
                use = carouselFunction("1", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}
                    >
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                ]
            } else if (this.state.box === "2") {
                use = carouselFunction("2", props, state, self);
                styledCarousel = [
                    <React.Fragment key={this.state.keys[0]}>
                        <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                            <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                                {this.state.sliderImages[this.state.cur]}
                            </div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </React.Fragment>
                ]
            } else if (this.state.box === "3") {
                use = carouselFunction("3", props, state, self);
                styledCarousel = [
                    <React.Fragment key={this.state.keys[0]}>
                        <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                            <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                            <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                                {this.state.sliderImages[this.state.cur]}
                            </div>
                            <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                        </div>
                        <div style={use.CIRCLESDIV}>
                            {this.state.dots}
                        </div>
                    </React.Fragment>
                ]

            } else if (this.state.box === "4") {
                use = carouselFunction("4", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                ]
            } else if (this.state.box === "5") {
                use = carouselFunction("5", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                    </div>
                ]
            } else {
                use = carouselFunction("5", props, state, self);
                styledCarousel = [
                    <div key={this.state.keys[0]} style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[this.state.cur]}
                        </div>
                    </div>
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
        if (this.state.box === "2") {
            use = carouselFunction("2", props, state, self);
            styledCarousel = [
                <React.Fragment key={this.state.keys[0]}>
                    <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[x]}
                        </div>
                    </div>
                    <div style={use.CIRCLESDIV}>
                        {this.state.dots}
                    </div>
                </React.Fragment>
            ]
        } else if (this.state.box === "3") {
            use = carouselFunction("3", props, state, self);
            styledCarousel = [
                <React.Fragment key={this.state.keys[0]}>
                    <div style={use.WRAP} id={this.state.mainid} className={this.state.mainClassName}>
                        <div style={use.LEFT_ARROW} id={this.state.leftArrowid} className={`arrow ${this.state.leftArrowClassName}`} onClick={() => this.slideLeft()}></div>
                        <div style={use.SLIDER} id={this.state.sliderid} className={this.state.sliderClassName}>
                            {this.state.sliderImages[x]}
                        </div>
                        <div style={use.RIGHT_ARROW} id={this.state.rightArrowid} className={`arrow ${this.state.rightArrowClassName}`} onClick={() => this.slideRight()}></div>
                    </div>
                    <div style={use.CIRCLESDIV}>
                        {this.state.dots}
                    </div>
                </React.Fragment>
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