import React, { Component } from "react";
import './Pie.css';
import Slices from './Slices/Slices';
import Questions from "./Questions/Questions";

export default class Pie extends Component {
    state = {
        slices: {
            1: {
                question: 'Health',
                rotate: 'rotate(0.0000, 220, 220)',
                fill: '#ff5c00',
                transform: '0.1'
            },
            2: {
                question: 'Love Life',
                rotate: 'rotate(45.0000, 220, 220)',
                fill: '#9452ff',
                transform: '0.1'
            },
            3: {
                question: 'Career',
                rotate: 'rotate(90.0000, 220, 220)',
                fill: '#ff234b',
                transform: '0.1'
            },
            4: {
                question: 'Personal Growth',
                rotate: 'rotate(135.0000, 220, 220)',
                fill: '#357aff',
                transform: '0.1'
            },
            5: {
                question: 'Money Freedom',
                rotate: 'rotate(180.0000, 220, 220)',
                fill: '#00ab3a',
                transform: '0.1'
            },
            6: {
                question: 'Friends & Family',
                rotate: 'rotate(225.0000, 220, 220)',
                fill: '#888',
                transform: '0.1'
            },
            7: {
                question: 'Fun & Recreation',
                rotate: 'rotate(270.0000, 220, 220)',
                fill: '#00a9b5',
                transform: '0.1'
            },
            8: {
                question: 'Phsical Environment',
                rotate: 'rotate(315.0000, 220, 220)',
                fill: '#e5ac00',
                transform: '0.1'
            }
        }
    }

selectScore = question => e => {
    const targetValue = e.target.value === '10' ? '1': '0.'+ e.target.value;
    const newState = Object.assign({}, this.state);
    newState.slices[question].transform = targetValue;
    this.setState(newState);
}

    render() {
        return (
            <div className='Content'>
                <div className="QuestionsBlock">
                    <ul>
                        <Questions
                            slices = {this.state.slices}
                            selectScore = {this.selectScore}
                        />
                    </ul>
                </div>
                <div className="ChartBlock">
                    <div className="ChartPie" style={{ width: '450px' }}>
                        <svg className="ChartPieChunk" width={"440px"} height={"440px"} viewBox="0 0 440 440" xmlns="http://www.w3.org/svg">
                            <defs>
                                <g id="overlay">
                                    <rect x="219" y="20" height="200" width="2" fill="#fff"></rect>
                                </g>
                            </defs>
                            <mask id="wedge-mask" fill="white">
                                <path transform="translate(20,20)" d="M93 7.241a200.006 200.006 0 01173.551-.865L200.004 200 112.33 20.241z" fillRule="nonzero"></path>
                            </mask>
                            <circle cx="220" cy="220" r="200" fill="#efefef" stroke="#e3e3e3" strokeWidth={"1"}></circle>
                            <Slices
                                slices={this.state.slices}
                            />
                            <use xlinkHref="#overlay" transform="rotate(19, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(63.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(108.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(153.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(198.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(243.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(288.7143, 220, 220)"></use>
                            <use xlinkHref="#overlay" transform="rotate(333.7143, 220, 220)"></use>
                        </svg>
                    </div>
                </div>
            </div>
        );
    }
}