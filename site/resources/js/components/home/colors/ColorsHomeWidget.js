import React, {Component} from 'react';
import ColorsHomeWidgetItem from "./ColorsHomeWidgetItem";

export default class ColorsHomeWidget extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        /*
        let toSend = {
            'chat_id': 581007391,
            'text': 'Open Color'
        }

        console.log("Send Telegram!");

        fetch('https://api.telegram.org/bot1561012899:AAGMoPvTJC6PTOYpQdjCTFU-phA3-kQmJTM/sendMessage',
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                body: JSON.stringify(toSend) // body data type must match "Content-Type" header
            }
        )
            .then(res =>
                {
                    console.log("res"); console.log(res);
                }
            )
        .then(
            (result) => {
                console.log("after send: ");
                console.log(result);
            },
            (error) => {
                console.log("error after send: ");
                console.log(error);
            }
        )


         */



        fetch("/api/colors")
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
            <div className="row">

                <ul id='carList' className='row'>
                    { this.state.items.map(item => (
                        <ColorsHomeWidgetItem color={item}></ColorsHomeWidgetItem>
                    ))}
                </ul>
            </div>
        );
    }
}
