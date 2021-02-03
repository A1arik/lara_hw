import React, {Component} from 'react';
import './style.css';

export default class ColorsHomeWidgetItem extends Component {
    render() {
        return (
            <div className="col-sm-4 sm-margin-b-50">
                <div className="margin-b-20">
                    <div>
                        <img className="img-color"
                             src={'/storage/' + this.props.color.image} alt="Latest Products Image" />
                    </div>
                </div>
                <h4><a href="#">{this.props.color.name}</a></h4>
            </div>
        );
    }
}


