import React, { Component } from "react";
import Quote from "./Quote";

class QuoteSearcher extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    fetch(`https://quote-garden.herokuapp.com/quotes/search/tree`)
      .then(data => data.json())
      .then(json => this.storeData(json.results))
      

      .catch(console.error);
  } 

  storeData(json){
    console.log("storeData function", json)
    this.setState({quotes: json})

  }





  render() {

        console.log("state", this.state.quotes)



    return (
      <div>
        <Quote quotes={this.state.quotes} />
      </div>
    );
  }
}

export default QuoteSearcher;
