import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Welcome from "./home/Welcome";
import PortfolioIndex from "./portfolio/PortfolioIndex";
import PortfolioItem from "./portfolio/PortfolioItem";
import Crud from "./crud";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import er404 from "./errors/er404";
import Test from "./tests";
import Login from "./auth/Login";
import Logout from "./auth/Logout";
import Register from "./auth/Register";
import FileForm from "./files/fileform";
import ImagesIndex from "./images/ImagesIndex";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Router>
                <Header/>
                    <Switch>
                        <Route exact path="/" component={Welcome}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/fileform" component={FileForm}></Route>
                        <Route path="/crudimages" component={ImagesIndex}></Route>

                        <Route path="/logout" component={Logout}></Route>
                        <Route path="/register_user" component={Register}></Route>
                        <Route path="/portfolio" component={PortfolioIndex}></Route>
                        <Route path="/crud" component={Crud}></Route>
                        <Route path="/tests" component={Test}></Route>
                        <Route path="/:slug/portfolio/:id" component={PortfolioItem}></Route>

                        <Route component={er404}></Route>
                    </Switch>
                </Router>
                <Footer/>
            </div>
        );
    }
}

 ReactDOM.render(<Main/>, document.getElementById('app'));
