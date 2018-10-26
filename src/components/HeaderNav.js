import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => (
    <nav>
        <ul>
            <li><NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active" exact={true}>Create Expense</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active" exact={true}>Help</NavLink></li>
        </ul>
    </nav>
);

export default HeaderNav;