import React, { Component } from 'react'
import Slider from '../../components/main-page/Slider';
import SearchForm from '../../components/main-page/SearchForm';

export class Mainpage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             year: "2020-02-02"
        }
        this.getStateFromCHild = this.getStateFromCHild.bind(this);
    }
    

    getStateFromCHild(childState){
        console.log(childState, "ye");

        this.setState({year: childState.year});
    }

    render() {
        return (
            <div>
                <SearchForm saveState={this.getStateFromCHild}></SearchForm>
                <Slider year={this.state.year} company={2} title={"disney"}></Slider>
                <Slider year={this.state.year} company={420} title={"Marvel"}></Slider>
                <Slider year={this.state.year} company={4} title={"Paramount"}></Slider>
                <Slider year={this.state.year} company={25} title={"20th Century Fox"}></Slider>
                <Slider year={this.state.year} company={1632} title={"Lionsgate"}></Slider>
            </div>
        )
    }
}

export default Mainpage