import React, { Component } from 'react'
import { now } from '../../../node_modules/moment';

export class SearchForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             year: "2020-03-27"
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
   /*      <div className="pure-u-1 pure-u-md-1-3">
                            <label >Movie title</label>
                            <input id="last-name" className="pure-u-23-24" type="text"/>
                        </div>*/

    
    render() {

      
        return (
         
                <form onSubmit={this.onSubmit} className="pure-form pure-form-stacked">
                <fieldset>
                <legend>  <h2 className="grayT">Filter Release Date</h2></legend>

                    <div className="pure-g">
                       
                        <div className="pure-u-1 pure-u-md-1-3">
                            <label >Release year</label>
                            <input type="date" min="2020-03-27" value={this.state.year} onChange={this.yearChange} id="start" name="trip-start" className="pure-u-23-24"></input>
                        </div>

                    

                    </div>

                 
                    <button type="submit" className="pure-button pure-button-primary">Run Query</button>
                </fieldset>
                </form>
         
        )
    }
}

export default SearchForm
