import React from "react";

export const Welcome = (props) =>  {
    return(
        <div className="container">
            <div className="starter-template">
                <h1>{props.name}</h1>
                <span>{props.homeLink}</span>
                
                <p className="lead">Welcome to react new state less Component. State Less Component has only this.props or no dynamic properties To Manage State from React Component ist very difficult task, Generally its good practise to manage state carefully </p>

            </div>
        </div>
    );
}

// <br> tag will break the react code