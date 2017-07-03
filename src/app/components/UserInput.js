import React from "react";

export class UserInput extends React.Component{
    render(){
        return(
             <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-block">
                            <div className="form-inline">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Jane Doe"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Send invitation</button>
                            </div>
                        </div>
                    </div>
                </div>   
             </div>
        );
    }
}