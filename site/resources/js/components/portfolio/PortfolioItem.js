import React, {Component} from 'react';
import Title from "../../layouts/Title";

export default class PortfolioItem extends Component {


    constructor(props) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            id: this.props.location.pathname.split('/')[3]
        };

        console.log(this.state.id);


    }

    componentDidMount() {
        fetch('/api/portfolios/' + this.state.id)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("then: ");
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }


    render() {
        const { error, isLoaded } = this.state;
        // console.log("render Items: ");
        // console.log (items);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return this.renderDesign();
        }

    }

    renderDesign() {
        // this.props.history.push('/' + this.state.items[0].slug + '/porfolio/' + this.state.id);
        return (
            <div>
                <Title title={'Portfolio: '+ this.state.items[0].name}/>
                <div className="content-lg container">
                    <div className="row margin-b-20">
                        Элемент портфолио
                    </div>
                </div>
            </div>
        );
    }
}
