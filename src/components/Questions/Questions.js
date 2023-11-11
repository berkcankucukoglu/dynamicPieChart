import React from "react";
import './Questions.css';

const Questions = (props) => {
    let questions = Object.keys(props.slices).map((questionsKey, i) => (
        <li key={questionsKey}>
            <p>{props.slices[questionsKey].question}</p>
            <div className="Answer">
                <input
                    onChange={props.selectScore(questionsKey)}
                    type="range"
                    min="1"
                    max="10"
                    value={props.slices[questionsKey].transform === "1" ? '10' : props.slices[questionsKey].transform.replace('0.','')}
                    className="rangeInput"
                    style={{ background: props.slices[questionsKey].fill }}
                ></input>
                <span className="Score" style={{backgroundColor: props.slices[questionsKey].fill}}>
                <div className="leftArrow" style={{borderRight: '5px solid' + props.slices[questionsKey].fill}}></div>
                {props.slices[questionsKey].transform === '1'? '10' : props.slices[questionsKey].transform.replace('0.', '')}   
                </span> 
            </div>
        </li>
    ));
    return (
        <>
            {questions}
        </>
    );


}

export default Questions;