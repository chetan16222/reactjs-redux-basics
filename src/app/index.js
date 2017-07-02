import React from "react";
import {render} from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Banner } from "./components/Banner";

class App extends React.Component {
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
                <div className="cmpt cmpt-banner"><Banner/></div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));