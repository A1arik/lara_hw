import React, {Component} from 'react';
import ColorsHomeWidget from "./colors/ColorsHomeWidget";
import Title from "../../layouts/Title";

export default class Welcome extends Component {
    render() {
        return (
          <div>
              <Title title="Welcome"/>
              <div className="content-lg container">
                <div className="row margin-b-20">
                <ColorsHomeWidget/>
                </div>
              </div>
          </div>
        );
    }
}
