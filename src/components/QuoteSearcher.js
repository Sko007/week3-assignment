import React, { Component } from "react";
import Quote from "./Quote";
import Search from "./search";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    data: [{ liked: null, disliked: null, id: null }],
    loading: true,
    count: []
  };

  componentDidMount() {
    fetch(`https://quote-garden.herokuapp.com/quotes/search/tree`)
      .then(data => data.json())
      .then(json => this.storeData(json.results))

      .catch(console.error);
  }

  search = (name) => {
    fetch(
      `https://quote-garden.herokuapp.com/quotes/search/${name}`
    )
      .then(data => data.json())
      .then(json => this.storeData(json.results))

      .catch(console.error);
  };

  //Store Data

  storeData(json) {
    this.setState({ quotes: json });

    this.setState({ loading: false });
  }

  //get data from Searchcomponent and set into state

  getData = name => {
    this.setState({
      searchName: name
    });

    console.log("how does the state look like after getData", this.state.data);

    this.search(name);
  };

  //count like of each component

  counter = (id, color) => {
    console.log("lifting the state", id, color);

    return this.state.quotes.forEach(ele => {
      if (ele._id === id) {
        this.setState({
          count: this.state.count.concat({ color })
        });

      }
      console.log("wie sieht der state aus?", this.state.count)
    });
  };

  counter1 = (id, color) => {
    return this.state.quotes.forEach(ele => {
      if (ele._id === id) {
        this.setState({
          count: this.state.count.concat({ color })
        });

      }
      console.log("wie sieht der state aus?", this.state.count)
    });
  };

  renderQuote = element => {
    return (
      <Quote
        load={this.state.loading}
        id={element._id}
        key={element.key}
        counter={this.counter}
        counter1={this.counter1}
        liked={element.liked}
        disliked={element.disliked}
        author={element.quoteAuthor}
        paragraph={element.quoteText}
      />
    );
  };

  render() {
    const status = this.state.loading;

    // console.log("state how the data looked", this.state.data);

    const filterBoolean = this.state.count.map(ele => {
      return ele.color;
    });

    const counter = filterBoolean.reduce(function(acc, count) {
      return count === "green" ? acc + 1 : acc;
    }, 0);

    const filterBoolean1 = this.state.count.map(ele => {
      return ele.color;
    });

    const counter1 = filterBoolean1.reduce(function(acc, count) {
      return count === "red" ? acc + 1 : acc;
    }, 0);

    // console.log("check state of quotes", this.state.quotes);

    // console.log("Datatype of Quotes", typeof this.state.quotes);
    // console.log("Datatype of Quotes", this.state.quotes);
    // console.log("test state data", this.state.data);
    // console.log("How does my state looks like", this.state.quotes)

    return (
      <div>
        <Search getData={this.getData} />
        <div>Likes:{counter}</div>
        <div>Dislikes:{counter1}</div>
        <hr></hr>

        <div> {this.state.quotes.map(this.renderQuote)}</div>
      </div>
    );
  }
}

export default QuoteSearcher;
