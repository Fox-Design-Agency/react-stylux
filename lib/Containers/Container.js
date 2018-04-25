import React, { Component } from 'react';
import '../css/reset.css';
import StyleSheet from 'nestingstyles';
import containerSwitch1 from './containerFunctions/containerSwitch0_5';
import containerSwitch2 from './containerFunctions/containerSwitch6_10';
import containerSwitch3 from './containerFunctions/containerSwitch11_15';
import containerSwitch4 from './containerFunctions/containerSwitch16_20';
import containerSwitch5 from "./containerFunctions/containerSwitch21_25";
import containerSwitch6 from "./containerFunctions/containerSwitch26_30";
import containerSwitch7 from "./containerFunctions/containerSwitch31_35";
import containerSwitch8 from "./containerFunctions/containerSwitch36_40";
import containerSwitch9 from "./containerFunctions/containerSwitch41_45";
import containerSwitch10 from "./containerFunctions/containerSwitch46_50";

/* Start of Container Component */
export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: props.display || 'flex',
            direction: props.direction || 'column',
            height: props.height,
            maxHeight: props.maxHeight,
            width: props.width || "100%",
            maxWidth: props.maxWidth,
            borderLeft: props.bLeft,
            borderRight: props.bRight,
            borderTop: props.bTop,
            borderBottom: props.bBottom,
            border: props.border,
            padding: props.padding || '0',
            margin: props.margin || '10px 0',
            smdis: props.smDis || 'flex',
            mddis: props.mdDis || 'flex',
            smflexDir: props.smflexDir || 'column',
            mdflexDir: props.mdflexDir || 'column',
            childs: [],
            className: props.className,
            id: props.id,
        }
    }
    componentDidMount() {
        const props = this.props;
        const state = this.state;
        let styledHolder, styledChilds1, styledChilds2, styledChilds3, styledChilds4, styledChilds5, styledChilds6, styledChilds7, styledChilds8, styledChilds9, styledChilds10, styledChilds11, styledChilds12, styledChilds13, styledChilds14, styledChilds15, styledChilds16, styledChilds17, styledChilds18, styledChilds19, styledChilds20, styledChilds21, styledChilds22, styledChilds23, styledChilds24, styledChilds25, styledChilds26, styledChilds27, styledChilds28, styledChilds29, styledChilds30, styledChilds31, styledChilds32, styledChilds33, styledChilds34, styledChilds35, styledChilds36, styledChilds37, styledChilds38, styledChilds39, styledChilds40, styledChilds41, styledChilds42, styledChilds43, styledChilds44, styledChilds45, styledChilds46, styledChilds47, styledChilds48, styledChilds49, styledChilds50 = '';
        const CHILDS = React.Children.toArray(this.props.children)
        const num = CHILDS.length;
        if (num === 1) {
            let use = containerSwitch1(1, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles} className={this.state.className} id={this.state.id}>{CHILDS[0]}</div>,
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles}>{styledChilds1}</section>
            ]
        } else if (num === 2) {
            let use = containerSwitch1(2, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if(num === 3){
            let use = containerSwitch1(3, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}</section>
            ]
        } else if (num === 4) {
            let use = containerSwitch1(4, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}</section>
            ]
        } else if (num === 5) {
            let use = containerSwitch1(5, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}</section>
            ]
        } else if (num === 6) {
            let use = containerSwitch2(6, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}</section>
            ]
        } else if (num === 7) {
            let use = containerSwitch2(7, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}</section>
            ]
        } else if (num === 8) {
            let use = containerSwitch2(8, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}</section>
            ]
        } else if (num === 9) {
            let use = containerSwitch2(9, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}</section>
            ]
        } else if (num === 10) {
            let use = containerSwitch2(10, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}</section>
            ]
        } else if (num === 11) {
            let use = containerSwitch3(11, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}</section>
            ]
        } else if (num === 12) {
            let use = containerSwitch3(12, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}</section>
            ]
        } else if (num === 13) {
            let use = containerSwitch3(13, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}</section>
            ]
        } else if (num === 14) {
            let use = containerSwitch3(14, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}</section>
            ]
        } else if (num === 15) {
            let use = containerSwitch3(15, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}</section>
            ]
        } else if (num === 16) {
            let use = containerSwitch4(16, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}</section>
            ]
        } else if (num === 17) {
            let use = containerSwitch4(17, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}</section>
            ]
        } else if (num === 18) {
            let use = containerSwitch4(18, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}</section>
            ]
        } else if (num === 19) {
            let use = containerSwitch4(19, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}</section>
            ]
        } else if (num === 20) {
            let use = containerSwitch4(20, props, state)

            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}</section>
            ]
        } else if (num === 21) {
            let use = containerSwitch5(21, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}</div>
            ]
        } else if (num === 22) {
            let use = containerSwitch5(22, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}</div>
            ]
        } else if (num === 23) {
            let use = containerSwitch5(23, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}</div>
            ]
        } else if (num === 24) {
            let use = containerSwitch5(24, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}</div>
            ]
        } else if (num === 25) {
            let use = containerSwitch5(25, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}</div>
            ]
        } else if (num === 26) {
            let use = containerSwitch6(26, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}</div>
            ]
        } else if (num === 27) {
            let use = containerSwitch6(27, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}</div>
            ]
        } else if (num === 28) {
            let use = containerSwitch6(28, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}}</div>
            ]
        } else if (num === 29) {
            let use = containerSwitch6(29, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}</div>
            ]
        } else if (num === 30) {
            let use = containerSwitch6(30, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}</div>
            ]
        } else if (num === 31) {
            let use = containerSwitch7(31, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}</div>
            ]
        } else if (num === 32) {
            let use = containerSwitch7(32, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}</div>
            ]
        } else if (num === 33) {
            let use = containerSwitch7(33, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}</div>
            ]
        } else if (num === 34) {
            let use = containerSwitch7(34, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}</div>
            ]
        } else if (num === 35) {
            let use = containerSwitch7(35, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}</div>
            ]
        } else if (num === 36) {
            let use = containerSwitch8(36, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}</div>
            ]
        } else if (num === 37) {
            let use = containerSwitch8(37, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}</div>
            ]
        } else if (num === 38) {
            let use = containerSwitch8(38, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}</div>
            ]
        } else if (num === 39) {
            let use = containerSwitch8(39, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}</div>
            ]
        } else if (num === 40) {
            let use = containerSwitch8(40, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}</div>
            ]
        } else if (num === 41) {
            let use = containerSwitch9(41, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}</div>
            ]
        } else if (num === 42) {
            let use = containerSwitch9(42, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}</div>
            ]
        } else if (num === 43) {
            let use = containerSwitch9(43, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}</div>
            ]
        } else if (num === 44) {
            let use = containerSwitch9(44, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}</div>
            ]
        } else if (num === 45) {
            let use = containerSwitch9(45, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}</div>
            ]
        } else if (num === 46) {
            let use = containerSwitch10(46, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}</div>
            ]
        } else if (num === 47) {
            let use = containerSwitch10(47, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledChilds47 = <div key={Math.random()} style={use.block47styles.block47styles}>{CHILDS[46]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}{styledChilds47}</div>
            ]
        } else if (num === 48) {
            let use = containerSwitch10(48, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledChilds47 = <div key={Math.random()} style={use.block47styles.block47styles}>{CHILDS[46]}</div>
            styledChilds48 = <div key={Math.random()} style={use.block48styles.block48styles}>{CHILDS[47]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}{styledChilds47}{styledChilds48}</div>
            ]
        } else if (num === 49) {
            let use = containerSwitch10(49, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledChilds47 = <div key={Math.random()} style={use.block47styles.block47styles}>{CHILDS[46]}</div>
            styledChilds48 = <div key={Math.random()} style={use.block48styles.block48styles}>{CHILDS[47]}</div>
            styledChilds49 = <div key={Math.random()} style={use.block49styles.block49styles}>{CHILDS[48]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}{styledChilds47}{styledChilds48}{styledChilds49}</div>
            ]
        } else if (num === 50) {
            let use = containerSwitch10(50, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledChilds47 = <div key={Math.random()} style={use.block47styles.block47styles}>{CHILDS[46]}</div>
            styledChilds48 = <div key={Math.random()} style={use.block48styles.block48styles}>{CHILDS[47]}</div>
            styledChilds49 = <div key={Math.random()} style={use.block49styles.block49styles}>{CHILDS[48]}</div>
            styledChilds50 = <div key={Math.random()} style={use.block50styles.block50styles}>{CHILDS[49]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}{styledChilds47}{styledChilds48}{styledChilds49}{styledChilds50}</div>
            ]
        } else {
            styledHolder = '';
        }
        return this.setState({ childs: styledHolder })

    }
    //below is not done and will most likely not render correctly
    componentWillReceiveProps(newProps) {
        const props = newProps;
        const state = this.state;
        let styledHolder, styledChilds1, styledChilds2, styledChilds3, styledChilds4, styledChilds5, styledChilds6, styledChilds7, styledChilds8, styledChilds9, styledChilds10, styledChilds11, styledChilds12, styledChilds13, styledChilds14, styledChilds15, styledChilds16, styledChilds17, styledChilds18, styledChilds19, styledChilds20, styledChilds21, styledChilds22, styledChilds23, styledChilds24, styledChilds25, styledChilds26, styledChilds27, styledChilds28, styledChilds29, styledChilds30, styledChilds31, styledChilds32, styledChilds33, styledChilds34, styledChilds35, styledChilds36, styledChilds37, styledChilds38, styledChilds39, styledChilds40, styledChilds41, styledChilds42, styledChilds43, styledChilds44, styledChilds45, styledChilds46, styledChilds47, styledChilds48, styledChilds49, styledChilds50 = '';
        const CHILDS = React.Children.toArray(newProps.children)
        const num = CHILDS.length;
        if (num === 1) {
            let use = containerSwitch1(1, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>,
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}</section>
            ]
        } else if (num === 2) {
            let use = containerSwitch1(2, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}</section>
            ]
        } else if(num === 3){
            let use = containerSwitch1(3, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}</section>
            ]
        } else if (num === 4) {
            let use = containerSwitch1(4, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}</section>
            ]
        } else if (num === 5) {
            let use = containerSwitch1(5, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}</section>
            ]
        } else if (num === 6) {
            let use = containerSwitch2(6, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}</section>
            ]
        } else if (num === 7) {
            let use = containerSwitch2(7, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}</section>
            ]
        } else if (num === 8) {
            let use = containerSwitch2(8, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}</section>
            ]
        } else if (num === 9) {
            let use = containerSwitch2(9, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}</section>
            ]
        } else if (num === 10) {
            let use = containerSwitch2(10, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}</section>
            ]
        } else if (num === 11) {
            let use = containerSwitch3(11, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}</section>
            ]
        } else if (num === 12) {
            let use = containerSwitch3(12, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}</section>
            ]
        } else if (num === 13) {
            let use = containerSwitch3(13, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}</section>
            ]
        } else if (num === 14) {
            let use = containerSwitch3(14, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}</section>
            ]
        } else if (num === 15) {
            let use = containerSwitch3(15, props, state)
           
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}</section>
            ]
        } else if (num === 16) {
            let use = containerSwitch4(16, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}</section>
            ]
        } else if (num === 17) {
            let use = containerSwitch4(17, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}</section>
            ]
        } else if (num === 18) {
            let use = containerSwitch4(18, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}</section>
            ]
        } else if (num === 19) {
            let use = containerSwitch4(19, props, state)
            
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}</section>
            ]
        } else if (num === 20) {
            let use = containerSwitch4(20, props, state)

            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledHolder = [
                <section key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}</section>
            ]
        } else if (num === 21) {
            let use = containerSwitch5(21, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}</div>
            ]
        } else if (num === 22) {
            let use = containerSwitch5(22, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}</div>
            ]
        } else if (num === 23) {
            let use = containerSwitch5(23, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}</div>
            ]
        } else if (num === 24) {
            let use = containerSwitch5(24, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}</div>
            ]
        } else if (num === 25) {
            let use = containerSwitch5(25, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}</div>
            ]
        } else if (num === 26) {
            let use = containerSwitch6(26, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}</div>
            ]
        } else if (num === 27) {
            let use = containerSwitch6(27, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}</div>
            ]
        } else if (num === 28) {
            let use = containerSwitch6(28, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}}</div>
            ]
        } else if (num === 29) {
            let use = containerSwitch6(29, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}</div>
            ]
        } else if (num === 30) {
            let use = containerSwitch6(30, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}</div>
            ]
        } else if (num === 31) {
            let use = containerSwitch7(31, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}</div>
            ]
        } else if (num === 32) {
            let use = containerSwitch7(32, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}</div>
            ]
        } else if (num === 33) {
            let use = containerSwitch7(33, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}</div>
            ]
        } else if (num === 34) {
            let use = containerSwitch7(34, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}</div>
            ]
        } else if (num === 35) {
            let use = containerSwitch7(35, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}</div>
            ]
        } else if (num === 36) {
            let use = containerSwitch8(36, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}</div>
            ]
        } else if (num === 37) {
            let use = containerSwitch8(37, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}</div>
            ]
        } else if (num === 38) {
            let use = containerSwitch8(38, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}</div>
            ]
        } else if (num === 39) {
            let use = containerSwitch8(39, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}</div>
            ]
        } else if (num === 40) {
            let use = containerSwitch8(40, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}</div>
            ]
        } else if (num === 41) {
            let use = containerSwitch9(41, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}</div>
            ]
        } else if (num === 42) {
            let use = containerSwitch9(42, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}</div>
            ]
        } else if (num === 43) {
            let use = containerSwitch9(43, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}</div>
            ]
        } else if (num === 44) {
            let use = containerSwitch9(44, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}</div>
            ]
        } else if (num === 45) {
            let use = containerSwitch9(45, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}</div>
            ]
        } else if (num === 46) {
            let use = containerSwitch10(46, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}</div>
            ]
        } else if (num === 47) {
            let use = containerSwitch10(47, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledChilds47 = <div key={Math.random()} style={use.block47styles.block47styles}>{CHILDS[46]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}{styledChilds47}</div>
            ]
        } else if (num === 48) {
            let use = containerSwitch10(48, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledChilds47 = <div key={Math.random()} style={use.block47styles.block47styles}>{CHILDS[46]}</div>
            styledChilds48 = <div key={Math.random()} style={use.block48styles.block48styles}>{CHILDS[47]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}{styledChilds47}{styledChilds48}</div>
            ]
        } else if (num === 49) {
            let use = containerSwitch10(49, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledChilds47 = <div key={Math.random()} style={use.block47styles.block47styles}>{CHILDS[46]}</div>
            styledChilds48 = <div key={Math.random()} style={use.block48styles.block48styles}>{CHILDS[47]}</div>
            styledChilds49 = <div key={Math.random()} style={use.block49styles.block49styles}>{CHILDS[48]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}{styledChilds47}{styledChilds48}{styledChilds49}</div>
            ]
        } else if (num === 50) {
            let use = containerSwitch10(50, props, state)
            styledChilds1 = <div key={Math.random()} style={use.block1styles.block1styles}>{CHILDS[0]}</div>
            styledChilds2 = <div key={Math.random()} style={use.block2styles.block2styles}>{CHILDS[1]}</div>
            styledChilds3 = <div key={Math.random()} style={use.block3styles.block3styles}>{CHILDS[2]}</div>
            styledChilds4 = <div key={Math.random()} style={use.block4styles.block4styles}>{CHILDS[3]}</div>
            styledChilds5 = <div key={Math.random()} style={use.block5styles.block5styles}>{CHILDS[4]}</div>
            styledChilds6 = <div key={Math.random()} style={use.block6styles.block6styles}>{CHILDS[5]}</div>
            styledChilds7 = <div key={Math.random()} style={use.block7styles.block7styles}>{CHILDS[6]}</div>
            styledChilds8 = <div key={Math.random()} style={use.block8styles.block8styles}>{CHILDS[7]}</div>
            styledChilds9 = <div key={Math.random()} style={use.block9styles.block9styles}>{CHILDS[8]}</div>
            styledChilds10 = <div key={Math.random()} style={use.block10styles.block10styles}>{CHILDS[9]}</div>
            styledChilds11 = <div key={Math.random()} style={use.block11styles.block11styles}>{CHILDS[10]}</div>
            styledChilds12 = <div key={Math.random()} style={use.block12styles.block12styles}>{CHILDS[11]}</div>
            styledChilds13 = <div key={Math.random()} style={use.block13styles.block13styles}>{CHILDS[12]}</div>
            styledChilds14 = <div key={Math.random()} style={use.block14styles.block14styles}>{CHILDS[13]}</div>
            styledChilds15 = <div key={Math.random()} style={use.block15styles.block15styles}>{CHILDS[14]}</div>
            styledChilds16 = <div key={Math.random()} style={use.block16styles.block16styles}>{CHILDS[15]}</div>
            styledChilds17 = <div key={Math.random()} style={use.block17styles.block17styles}>{CHILDS[16]}</div>
            styledChilds18 = <div key={Math.random()} style={use.block18styles.block18styles}>{CHILDS[17]}</div>
            styledChilds19 = <div key={Math.random()} style={use.block19styles.block19styles}>{CHILDS[18]}</div>
            styledChilds20 = <div key={Math.random()} style={use.block20styles.block20styles}>{CHILDS[19]}</div>
            styledChilds21 = <div key={Math.random()} style={use.block21styles.block21styles}>{CHILDS[20]}</div>
            styledChilds22 = <div key={Math.random()} style={use.block22styles.block22styles}>{CHILDS[21]}</div>
            styledChilds23 = <div key={Math.random()} style={use.block23styles.block23styles}>{CHILDS[22]}</div>
            styledChilds24 = <div key={Math.random()} style={use.block24styles.block24styles}>{CHILDS[23]}</div>
            styledChilds25 = <div key={Math.random()} style={use.block25styles.block25styles}>{CHILDS[24]}</div>
            styledChilds26 = <div key={Math.random()} style={use.block26styles.block26styles}>{CHILDS[25]}</div>
            styledChilds27 = <div key={Math.random()} style={use.block27styles.block27styles}>{CHILDS[26]}</div>
            styledChilds28 = <div key={Math.random()} style={use.block28styles.block28styles}>{CHILDS[27]}</div>
            styledChilds29 = <div key={Math.random()} style={use.block29styles.block29styles}>{CHILDS[28]}</div>
            styledChilds30 = <div key={Math.random()} style={use.block30styles.block30styles}>{CHILDS[29]}</div>
            styledChilds31 = <div key={Math.random()} style={use.block31styles.block31styles}>{CHILDS[30]}</div>
            styledChilds32 = <div key={Math.random()} style={use.block32styles.block32styles}>{CHILDS[31]}</div>
            styledChilds33 = <div key={Math.random()} style={use.block33styles.block33styles}>{CHILDS[32]}</div>
            styledChilds34 = <div key={Math.random()} style={use.block34styles.block34styles}>{CHILDS[33]}</div>
            styledChilds35 = <div key={Math.random()} style={use.block35styles.block35styles}>{CHILDS[34]}</div>
            styledChilds36 = <div key={Math.random()} style={use.block36styles.block36styles}>{CHILDS[35]}</div>
            styledChilds37 = <div key={Math.random()} style={use.block37styles.block37styles}>{CHILDS[36]}</div>
            styledChilds38 = <div key={Math.random()} style={use.block38styles.block38styles}>{CHILDS[37]}</div>
            styledChilds39 = <div key={Math.random()} style={use.block39styles.block39styles}>{CHILDS[38]}</div>
            styledChilds40 = <div key={Math.random()} style={use.block40styles.block40styles}>{CHILDS[39]}</div>
            styledChilds41 = <div key={Math.random()} style={use.block41styles.block41styles}>{CHILDS[40]}</div>
            styledChilds42 = <div key={Math.random()} style={use.block42styles.block42styles}>{CHILDS[41]}</div>
            styledChilds43 = <div key={Math.random()} style={use.block43styles.block43styles}>{CHILDS[42]}</div>
            styledChilds44 = <div key={Math.random()} style={use.block44styles.block44styles}>{CHILDS[43]}</div>
            styledChilds45 = <div key={Math.random()} style={use.block45styles.block45styles}>{CHILDS[44]}</div>
            styledChilds46 = <div key={Math.random()} style={use.block46styles.block46styles}>{CHILDS[45]}</div>
            styledChilds47 = <div key={Math.random()} style={use.block47styles.block47styles}>{CHILDS[46]}</div>
            styledChilds48 = <div key={Math.random()} style={use.block48styles.block48styles}>{CHILDS[47]}</div>
            styledChilds49 = <div key={Math.random()} style={use.block49styles.block49styles}>{CHILDS[48]}</div>
            styledChilds50 = <div key={Math.random()} style={use.block50styles.block50styles}>{CHILDS[49]}</div>
            styledHolder = [
                <div key={Math.random()} style={use.holderstyles.holderstyles} className={this.state.className} id={this.state.id}>{styledChilds1}{styledChilds2}{styledChilds3}{styledChilds4}{styledChilds5}{styledChilds6}{styledChilds7}{styledChilds8}{styledChilds9}{styledChilds10}{styledChilds11}{styledChilds12}{styledChilds13}{styledChilds14}{styledChilds15}{styledChilds16}{styledChilds17}{styledChilds18}{styledChilds19}{styledChilds20}{styledChilds21}{styledChilds22}{styledChilds23}{styledChilds24}{styledChilds25}{styledChilds26}{styledChilds27}{styledChilds28}{styledChilds29}{styledChilds30}{styledChilds31}{styledChilds32}{styledChilds33}{styledChilds34}{styledChilds35}{styledChilds36}{styledChilds37}{styledChilds38}{styledChilds39}{styledChilds40}{styledChilds41}{styledChilds42}{styledChilds43}{styledChilds44}{styledChilds45}{styledChilds46}{styledChilds47}{styledChilds48}{styledChilds49}{styledChilds50}</div>
            ]
        } else {
            styledHolder = '';
        }
        return this.setState({ childs: styledHolder })
    }
    render() {
        return (
            <React.Fragment>
                {this.state.childs}
            </React.Fragment>
        )
    }
}