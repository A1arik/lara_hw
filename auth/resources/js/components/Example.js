import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Cookies from 'js-cookie';
import Login from "./auth/Login";
import Cabinet from "./auth/Cabinet";

export default class Example extends Component {




    render() {
        return(
            <div>
                <Login/>
                <Cabinet/>

            </div>
        )
    }
}


if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
