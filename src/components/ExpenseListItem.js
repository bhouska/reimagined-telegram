import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
    <p><Link to={`/edit/${id}`}>
            {description}
            </Link>
        </p>
        <p>{amount}</p>
        <p>{createdAt}</p>
        </div>
);

export default ExpenseListItem;