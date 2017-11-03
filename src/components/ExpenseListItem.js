
import React from 'react';
import { Link } from 'react-router-dom';



const ExpenseListItem = ({id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h4>{description}</h4></Link> |
        <span>{amount}</span> |
        <span>{createdAt}</span>

        <hr/>
    </div>
);

export default ExpenseListItem;

