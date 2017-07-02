import React from "react";
import {render} from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Banner } from "./components/Banner";
import { Welcome } from "./components/Welcome";

class App extends React.Component {
    onGreet(){
        alert("Welcome To ReactJS Application");
    }
    render() {
        var cartData = {
            siteName : "Valley Cart",
            mainNav:["Home", "About","Portfolio", "Contact US"]
        };
        return (
            <div>
                <div className="cmpt">
                    <Header cartData={cartData}>
                        <span className="compt-title">Header</span>
                    </Header>
                </div>
                <div className="cmpt cmpt-banner"><Banner initialNumber={0} initialAnothernum={0} greet={this.onGreet} /></div>
                <div className="cmpt cmpt-welcome"><Welcome name="Welcome to state less component" /></div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));