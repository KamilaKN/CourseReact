import React from 'react';

const Total = (props) => {
    return (
        <>
            <p>Общее количество заданий = {props.task1 + props.task2 + props.task3}</p>
        </>
    );
};

export default Total;