import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

export default class PortfolioIndexItem extends Component {
    render() {
        return (
            <div className="col-sm-4 sm-margin-b-50">
                <div className="margin-b-20">
                    <div>
                    </div>
                </div>
                <h4><NavLink to={`/${this.props.portfolio.slug}/portfolio/${this.props.portfolio.id}`}>{this.props.portfolio.name}</NavLink></h4>
                <ul>
                    <li>{ this.props.portfolio.portfolio_category.name}</li>
                </ul>
            </div>
        );
    }
}

/*

                    { this.props.portfolio.portfolio_category.map(item => (
                        <li>{item.name}</li>
                    ))}
 */


