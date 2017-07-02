import React from "react";
// Proptypes  https://facebook.github.io/react/docs/typechecking-with-proptypes.html [?] why we need that = to notify react
export class Banner extends React.Component {
    render(){
        var bannerData = {
            title: "Banner",
            pageTitle: "Hello, world!",
            desc:"This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.",
            btntxt: "Learn more »"
        };
        return(
            <div className="jumbotron">
                <div className="container">
                    <h1>{bannerData.pageTitle}</h1>
                    <p>{bannerData.desc}</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">{bannerData.btntxt}</a></p>
                </div>
            </div>
        );
    }
}

// good Practise

// Banner.ProtoType = {
//     pageTitle: React.ProtoType.string,
//     desc: React.ProtoType.string,
//     btntxt: React.ProtoType.btntxt.string
// };