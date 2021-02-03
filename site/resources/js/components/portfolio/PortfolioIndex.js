import React, {Component} from 'react';
import PortfolioIndexItem from "./PortfolioIndexItem";
import Title from "../../layouts/Title";

export default class PortfolioIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("/api/portfolios")
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
        return (
            <div>
                <Title title="Portfolio"/>
                <div className="content-lg container">
                    <div className="row margin-b-20">

                            { this.state.items.map(item => (
                                <PortfolioIndexItem portfolio={item}></PortfolioIndexItem>
                            ))}
                    </div>
                </div>
            </div>
        );
    }
}
