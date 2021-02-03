import React, {Component} from 'react';

export default class Title extends Component {
    render() {
        return (
            <div className="parallax-window" data-parallax="scroll" data-image-src="/img/1920x1080/01.jpg">
                <div className="parallax-content container">
                    <h1 className="carousel-title">{this.props.title}</h1>
                    <p></p>
                </div>
            </div>
        );
    }
}
