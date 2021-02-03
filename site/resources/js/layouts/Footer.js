import React, {Component} from 'react';
import ContactForm from "../components/form/ContactForm";

export default class Footer extends Component {
    render() {
        return (
            <div>

                <footer class="footer">
                    <div class="footer-seperator">
                        <div class="content-lg container">
                            <div class="row">
                                <div class="col-sm-2 sm-margin-b-50">
                                    <ul class="list-unstyled footer-list">
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Home</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">About</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Products</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Pricing</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Clients</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Careers</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Contact</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Terms</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-4 sm-margin-b-30">
                                    <ul class="list-unstyled footer-list">
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Twitter</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Facebook</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">Instagram</a></li>
                                        <li class="footer-list-item"><a class="footer-list-link" href="#">YouTube</a></li>
                                    </ul>
                                </div>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>

                    <div class="content container">
                        <div class="row">
                            <div class="col-xs-6">
                                <img class="footer-logo" src="/img/logo.png" alt="Asentus Logo"/>
                            </div>
                            <div class="col-xs-6 text-right">
                                <p class="margin-b-0"><a class="color-base fweight-700" href="http://keenthemes.com/preview/asentus/">Asentus</a> Theme Powered by: <a class="color-base fweight-700" href="http://www.keenthemes.com/">KeenThemes.com</a></p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}
