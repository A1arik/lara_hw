import React, {Component} from 'react';
import Title from "../../layouts/Title";

export default class er404 extends Component {
    render() {
        return (
            <div>
                <Title title="Error"/>
                <div className="content-lg container">
                    <div className="row margin-b-20">
                        <h4> Ничего не найдено</h4>
                    </div>
                </div>
            </div>
        );
    }
}
