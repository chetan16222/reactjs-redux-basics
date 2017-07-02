import React from "react";
// why we have not imported dom componet here because we need inside one component
// why we add key to li to set unique ref for react js
export class Header extends React.Component{
    render(){
        return(
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">{this.props.cartData.siteName}</a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse pull-right">
                        <ul className="nav navbar-nav">
                            {this.props.cartData.mainNav.map((menu,i) => <li key={i} className={i == 0 ? "active" : "" }><a href="#">{menu}</a></li>)}
                        </ul>
                    </div>
                </div>
            </nav>
            {this.props.children}
        </div>    
        );
    }
}

Header.propTypes = {
    children: React.PropTypes.element.isRequired
};

// to notify that children requird for this compoent