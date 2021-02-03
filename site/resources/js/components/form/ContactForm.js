import React, {Component} from 'react';


export default class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            isForm: true,
            Name:"",
            Email:"",
            Phone:"+38",
            Message:""
        };
        this.doSendForm = this.doSendForm.bind(this);
        this.onChange = this.onChange.bind(this);

        /*
        let toSend = {
            'chat_id': 581007391,
            'text': 'Open Form'
        }

        console.log("Send Telegram!");

        fetch('https://api.telegram.org/bot1521549965:AAFXuB5rhLcplRTSCxSxgCn3xJPJRkMQitY/sendMessage',
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

    }

    /*
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
    */

    render() {
        if (this.state.error) {
            return (
                <div className="col-sm-5 sm-margin-b-30">
                    <h2 className="color-white">Произошла ошибка</h2>
                    <div>Error: {this.state.error.message}</div>
                </div>
            );
        } else if (this.state.isForm) {
            return this.renderForm();
        } else {
            return this.renderMessage();
        }
    }


    renderMessage() {
        return (
            <div className="col-sm-5 sm-margin-b-30">
                <h2 className="color-white">Ваше сообщение отправлено</h2>
                <p> наши специалисты свяжутся с вами, как только получат его</p>
            </div>
        );
    }

    doSendForm(){

        let toSendTg = {
            'chat_id': 581007391,
            'text': 'Send Form'
        }

        console.log("Send Telegram!");

        fetch('https://api.telegram.org/bot1521549965:AAFXuB5rhLcplRTSCxSxgCn3xJPJRkMQitY/sendMessage',
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
                body: JSON.stringify(toSendTg) // body data type must match "Content-Type" header
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

        // console.log(
        //     this.state.Name + " " +
        //     this.state.Email + " " +
        //     this.state.Phone + " " +
        //     this.state.Message + " "
        // );
        let csrf = document.querySelector('meta[name="csrf-token"]').content;

        let toSend = {
            _token:  document.querySelector('meta[name="csrf-token"]').content,
            userName: this.state.Name,
            userEmail: this.state.Email,
            userPhone: this.state.Phone,
            userMessage: this.state.Message
        }
        // console.log(JSON.stringify(toSend));
        fetch('/api/contactform',
            {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                // mode: 'cors', // no-cors, *cors, same-origin
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
                    if (res.status == 200){
                        this.setState({isForm:false});
                    } else {
                        this.setState({error: res.status})
                    }
                }
            );
            // .then(
            //     (result) => {
            //         console.log("after send: ");
            //         console.log(result);
            //         this.setState({
            //             isLoaded: true,
            //             items: result
            //         });
            //     },
            //     (error) => {
            //         console.log("error after send: ");
            //         console.log(error);
            //         this.setState({
            //             isLoaded: true,
            //             error
            //         });
            //     }
            // )

    }

    onChange(e){
        this.state[e.target.name] = e.target.value;
        // if(this.state.name.length > 3 && this.state.phone.length > 3) {
        //     this.setState({isReady: true});
        // } else {
        //     this.setState({isReady: false});
        // }
    }

    renderForm() {
        return (
            <div className="col-sm-5 sm-margin-b-30">
                <h2 className="color-white">Send Us A Note</h2>
                <input type="text" className="form-control footer-input margin-b-20" placeholder="Name" name="Name"  onChange={this.onChange} required/>
                <input type="email" className="form-control footer-input margin-b-20" placeholder="Email" name="Email" onChange={this.onChange} required/>
                <input type="text" className="form-control footer-input margin-b-20" placeholder="Phone" name="Phone"  onChange={this.onChange} required/>
                <textarea className="form-control footer-input margin-b-30" rows="6" placeholder="Message" name="Message" required  onChange={this.onChange}></textarea>
                <button type="submit" className="btn-theme btn-theme-sm btn-base-bg text-uppercase" onClick={this.doSendForm}>Submit</button>
            </div>
        );
    }
}
