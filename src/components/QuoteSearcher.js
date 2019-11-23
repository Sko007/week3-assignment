import React, { Component } from "react";
import Quote from "./Quote";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    loading: true,
    like: null
  };

  componentDidMount() {
    fetch(`https://quote-garden.herokuapp.com/quotes/search/tree`)
      .then(data => data.json())
      .then(json => this.storeData(json.results))

      .catch(console.error);
  }

  storeData(json) {
    console.log("storeData function", json);
    this.setState({ quotes: json });
  }

  handleClick = event => {
    this.setState({});
  };

  render() {
    const status = this.state.loading;
    console.log("Datatype of Quotes", typeof this.state.quotes);
    console.log("Datatype of Quotes", this.state.quotes);

    return (
      <div>
        {!status && "loading"}
        {status &&
          this.state.quotes.map((element,key) => {




            return (

                <div key={key}>
              <Quote
                author={element.quoteAuthor}
                paragraph={element.quoteText}
              />
                </div>

            );






          })}
      </div>
    );
  }
}

export default QuoteSearcher;
