import React, { Component } from 'react'

export class SearchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             year: "2019-02-02"
        }
        this.yearChange = this.yearChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    yearChange(event) {
        console.log(event.target.value);
       this.setState({year: event.target.value});
       this.props.saveState(this.state);
    }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.saveState(this.state);
    }
   

    
    render() {

      
        return (
         
                <form onSubmit={this.onSubmit} className="pure-form pure-form-stacked">
                <fieldset>
                <legend>Filter and Search</legend>

                    <div className="pure-g">
                       
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label for="first-name">Release year</label>
                            <input type="date" value={this.state.year} onChange={this.yearChange} id="start" name="trip-start" className="pure-u-23-24"></input>
                        </div>

                        <div className="pure-u-1 pure-u-md-1-3">
                            <label for="last-name">Movie title</label>
                            <input id="last-name" className="pure-u-23-24" type="text"/>
                        </div>

                    </div>

                 
                    <button type="submit" className="pure-button pure-button-primary">Run Query</button>
                </fieldset>
                </form>
         
        )
    }
}

export default SearchForm
