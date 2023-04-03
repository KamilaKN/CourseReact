import React from 'react';

const Content = (props) => {
    return (
        <div>
            <p>{props.part1} {props.task1}</p>
            <p>{props.part2} {props.task2}</p>
            <p>{props.part3} {props.task3}</p>
        </div>
    );
};

export default Content;