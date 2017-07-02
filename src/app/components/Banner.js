import React from "react";
// Proptypes  https://facebook.github.io/react/docs/typechecking-with-proptypes.html [?] why we need that = to notify react
export class Banner extends React.Component {
    constructor(props){
        super();  // to execute parent constructor since we are inheriting from react.compoent
        this.state = {
            number : props.initialNumber,
            status : 0
            
        };
        //this.number = props.number;
    }

    onAddCounter() {

        this.setState({
            number: this.state.number + 1
        });
        //this.number += 1;
        //console.log(this.number);  // data need to reflect we need change the state
    };

    render(){
        var bannerData = {
            title: "Banner",
            pageTitle: "Hello, world!",
            desc:"This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.",
            btntxt: "Counter",
            num:0
        };
        
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1>{bannerData.pageTitle}</h1>
                    <p>{bannerData.desc}</p>
                    <p>Status: {this.state.status}</p>
                    <p><a className="btn btn-primary btn-lg" href="#" onClick={() => this.onAddCounter()}  role="button">{bannerData.btntxt} {this.state.number}</a></p>
                </div>
            </div>
        );
    }
}

// good Practise

Banner.propTypes = {
    pageTitle: React.PropTypes.string,
    desc: React.PropTypes.string,
    btntxt: React.PropTypes.string,
};


// this.onAddCounter() this will execute function right away
// this.onAddCounter: Uncaught TypeError: Cannot read property 'number' of null bcoz javascript this issue
// onClick={this.onAddCounter.bind(this)} old
// onClick={() => this.onAddCounter()} ES6