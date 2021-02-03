import React, {Component} from 'react';
import {Link, BrowserRouter, NavLink} from "react-router-dom";

export default class MainNav extends Component {
    render() {
        return (
            <div className="collapse navbar-collapse nav-collapse">
                <div className="menu-container">
                    <ul className="navbar-nav navbar-nav-right">

                        <li className="nav-item">
                            <NavLink to="/" activeClassName="nav-item-child nav-item-hover"> Home </NavLink>
                            <NavLink to="/portfolio" activeClassName="nav-item-child nav-item-hover"> Portfolio </NavLink>
                            <NavLink to="/crud" activeClassName="nav-item-child nav-item-hover"> Crud </NavLink>
                            <NavLink to="/login" activeClassName="nav-item-child nav-item-hover"> Login </NavLink>
                            <NavLink to="/logout" activeClassName="nav-item-child nav-item-hover"> Logout </NavLink>
                            <NavLink to="/register_user" activeClassName="nav-item-child nav-item-hover"> Register </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
