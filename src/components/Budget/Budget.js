import React from 'react';
import './Budget.css';

const Budget = (props) => {
    const budget = props.budget;
    const total = budget.reduce( (sum, budget) => sum + Number(budget.base_price.replace('$', '')), 0)
    return (
        <div className="budget-container">
            <h4>Player's Budget:</h4>
            <h6>Total Player Selected: {budget.length}</h6>
            <p>Total Budget expenses: ${total}</p>
            <p>Name of the selected player's:</p>
            <p><small>
            <ol>
                {
                    budget.map(budget => <li>Name: {budget.name} <br /> Price: {budget.base_price}</li> )
                }
            </ol>
            </small></p>
        </div>
    );
};

export default Budget;