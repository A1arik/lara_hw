import React, {Component} from 'react';
import Cookies from 'js-cookie';


export default class Cabinet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            name: "no name",
            isLogin: false
        }
        // this.onChange = this.onChange.bind(this);
        // this.doLogin = this.doLogin.bind(this);
    }

    componentDidMount() {
        axios.get(
            '/api/auth/postUser/' +  Cookies.get('access_token'),
        )
            .then(response=> {
                console.log("Then response: ");
                console.log(response.data);
            })
            .catch(error=> {
                console.log("Catch Error: ");
                console.log(error);
            });

    }

    render() {
        return(
            <div>
                Cabinet form
            </div>
        )
    }
}
