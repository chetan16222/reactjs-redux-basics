import React from "react";
// why export bcoz we need this component in main app component
// in render method you write anything in to "{}" but it has to in one line you can write like this { 5 == 2 ? "Yes" : "No"} 

export class Home extends React.Component{
    render(){
        return(
            <div>
                <p>In a new component</p>
                
            </div>
        );
    }
}