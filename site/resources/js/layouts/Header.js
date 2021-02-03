import React, {Component} from 'react';
import MainNav from "../routes/Nav";

export default class Header extends Component {
    render() {
        return (
            <div>

            <header class="header navbar-fixed-top">
                <nav class="navbar" role="navigation">
                    <div class="container">
                        <div class="menu-container">
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".nav-collapse">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="toggle-icon"></span>
                            </button>

                            <div class="logo">
                                <a class="logo-wrap" href="/">
                                    <img class="logo-img logo-img-main" src="/img/logo.png" alt="Asentus Logo" />
                                        <img class="logo-img logo-img-active" src="/img/logo-dark.png" alt="Asentus Logo" />
                                </a>
                            </div>
                        </div>

                        <MainNav />

                    </div>
                </nav>
            </header>


            </div>
        );

    }
}
