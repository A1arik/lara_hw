import React, {Component} from 'react';
import Cookies from 'js-cookie';


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLogin: false
        }
        this.onChange = this.onChange.bind(this);
        this.doLogin = this.doLogin.bind(this);
    }

    doLogin(e){

        let toSend = JSON.stringify({
            email: this.state.email,
            password: this.state.password
        });

        axios.post(
            '/api/auth/login',
            toSend,
            {
                headers:{
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response=> {
                console.log("Then response: ");
                console.log(response.data);
                Cookies.set('isLogin',true);
                Cookies.set('access_token',response.data.access_token);
            })
            .catch(error=> {
                console.log("Catch Error: ");
                console.log(error);
            });

        e.preventDefault();
    }




    render() {
        if (!this.isLogin) return this.renderForm();
        return(
            <div>
            </div>
        )
    }


    renderForm() {
        return (
            <div>
                <form>
                    <input type="email" placeholder="email" name="email" value={this.state.email} onChange={this.onChange}/>
                    <input type="password" placeholder="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <input type="button" value="Login" onClick={this.doLogin}/>
                </form>
            </div>
        )
    }

    onChange(e){
        const {name, value} = e.target;
        this.setState({[name]: value});
    }
}
