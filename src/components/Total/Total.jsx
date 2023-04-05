import React from "react";

const Total = (props) => {

    const total = props.tasks.reduce((acc,res) => {
        return acc + res.task
    }, 0)

    return (
        <>
            <p>
                Общее ко личество заданий =<span className="task">{total}</span>{""}
                <span>задания</span>
            </p>
        </>
    );
};

export default Total;
