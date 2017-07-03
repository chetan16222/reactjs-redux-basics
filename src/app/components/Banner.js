import React from "react";
// Proptypes  https://facebook.github.io/react/docs/typechecking-with-proptypes.html [?] why we need that = to notify react
export class Banner extends React.Component {
    constructor(props){
        super();  // to execute parent constructor since we are inheriting from react.compoent
        this.state = {
            number : props.initialNumber,
            anothernumber: props.initialAnothernum,
            status : 0,
            //homeLink : "change Link"
            homeLink : props.intialLinkName
            
        };
        //this.number = props.number;
        setTimeout(() =>{
            this.setState({
                status : this.state.status + 1
            });
        },3000);
    }

    onAddCounter() {

        this.setState({
            number: this.state.number + 1
        });
        //this.number += 1;
        //console.log(this.number);  // data need to reflect we need change the state
    };

    onChangeLink(){
        console.log(1);
        this.props.changeLink(this.state.homeLink);
    };

    

    onAddCounteranother(){
        this.setState({
            anothernumber: this.state.anothernumber + 1
        });
    };

    onHandlechange(event){
        this.setState({
            homeLink : event.target.value
        });
    }

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
                    <p><a className="btn btn-primary" href="#" onClick={() => this.onAddCounter()}  role="button">{bannerData.btntxt} {this.state.number}</a></p>
                    <p><a className="btn btn-primary" href="#" onClick={() => this.onAddCounteranother()}  role="button">{bannerData.btntxt} {this.state.anothernumber}</a></p>
                    <p><a className="btn btn-success" href="#" onClick={this.props.greet}  role="button">Greet</a></p>
                     <input type="text" className="form-control" id="name" value={this.state.homeLink} placeholder="Jane Doe" onChange={(event) => this.onHandlechange(event)} />
                    <p><a className="btn btn-warning" href="javascript:;" onClick={this.onChangeLink.bind(this)}  role="button">Chnage Welcome Link</a></p>
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
    greet: React.PropTypes.func,
    intialLinkName: React.PropTypes.string
};


// this.onAddCounter() this will execute function right away
// this.onAddCounter: Uncaught TypeError: Cannot read property 'number' of null bcoz javascript this issue
// onClick={this.onAddCounter.bind(this)} old
// onClick={() => this.onAddCounter()} ES6