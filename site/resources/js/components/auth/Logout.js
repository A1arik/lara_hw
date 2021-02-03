import React, { Component } from 'react'

class Logout extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: '',
        }
    }

    onSubmit(e){
        e.preventDefault();
        let toSend = {
            _token: document.querySelector('meta[name="csrf-token"]').content
        };
        console.log("Start do login");
        console.log(toSend);

        axios.post('/logout',  toSend)
            .then(response=> {
                //this.setState({err: false});
                // this.props.history.push("home") ;
                console.log("Then response: ");
                console.log(response);
            })
            .catch(error=> {
                console.log("Catch Error: ");
                console.log(error);
                //this.setState({err: true});
            });




    }


    render() {

        return (
            <div>
                <button onClick={this.onSubmit}> Выйти </button>
            </div>

        );
    }
}

export default Logout;
