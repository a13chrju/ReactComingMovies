import React, { Component } from 'react';
import {connect} from "react-redux";

class Movie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            popularity: 0,
            url: "",
            title: "",
            release: "",
            overview: ""
        }
        this.clickedMovie = this.clickedMovie.bind(this);
       
    }

    clickedMovie(){
       this.props.dispatch({ type: "OPEN_MODAL", value: this.state });

    }

    componentDidMount(){
        this.setState({
            url: this.props.url,
            popularity: this.props.popularity,
            title: this.props.title,
            release: this.props.release.replace("-", "/").replace("-", "/"),
            overview: this.props.overview
        });
    }

    render() {

        let style = {width:"auto"}
        return (
         
                 <li onClick={this.clickedMovie} style={Object.assign({}, style, {backgroundImage:"url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/" + this.props.backg + ")"})}>
                    <div className="child"></div>
                </li>
            
        )
    }
}


export default connect(null, )(Movie)