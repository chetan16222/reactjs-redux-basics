import React from "react";
import {render} from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Banner } from "./components/Banner";
import { Welcome } from "./components/Welcome";
import { UserInput } from "./components/UserInput";

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            homeLink : "Home"
        };
    }
    onGreet(){
        alert("Welcome To ReactJS Application");
    }
    onChangeLinkName(newName){
        this.setState({
            homeLink : newName
        });
    };
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
                <div className="cmpt cmpt-banner"><Banner 
                    initialNumber={0} 
                    initialAnothernum={0} 
                    greet={this.onGreet}
                    newname="hello"
                    intialLinkName={this.state.homeLink}
                    changeLink={this.onChangeLinkName.bind(this)}
                     />
                </div>
                <div className="cmpt cmpt-welcome"><Welcome name="Welcome to state less component" homeLink={this.state.homeLink}  /></div>
                <div className="cmpt cmpt-userinput">
                    <UserInput/>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));