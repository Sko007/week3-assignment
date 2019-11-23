import React, { Component } from "react";
import Quote from "./Quote";
import Search from "./search";

class QuoteSearcher extends Component {
  state = {
    quotes: [],
    data: [{ liked: null, disliked: null, id: null }],
    loading: true
  };

  componentDidMount() {
    fetch(`https://quote-garden.herokuapp.com/quotes/search/tree`)
      .then(data => data.json())
      .then(json => this.storeData(json.results))

      .catch(console.error);
  }

  search = () => {
    fetch(
      `https://quote-garden.herokuapp.com/quotes/search/${this.state.searchName}`
    )
      .then(data => data.json())
      .then(json => this.storeData(json.results))

      .catch(console.error);
  };

  //Store Data

  storeData(json) {
    this.setState({ quotes: json });
    // this.setState({loading: false}) // Loading has some issues
  }

  //get data from Searchcomponent and set into state

  getData = name => {
    this.setState({
      searchName: name
    });

    console.log("how does the state look like after getData", this.state.data);

    this.search();
  };

  //count like of each component

  counter = like => {
    console.log("value of like", like);

    const counter = this.state.data.map(count => {
      return { ...count, liked: like };
    });
    console.log("test modified state data", counter);
    this.setState({ data: counter });
    console.log("check the State.data", this.state.data);
  };
  //Count Dislike of Each component

  counter1 = dislike => {
    console.log("value of like", dislike);

    const counter = this.state.data.map(count => {
      return { ...count, disliked: dislike };
    });

    this.setState({ data: counter });
    console.log("check the State.data", this.state.data);
  };

  render() {
    const status = this.state.loading;

    console.log("state how the data looked", this.state.data);

    const filterBoolean = this.state.data.map(ele => {
      return ele.liked;
    });

    const counter = filterBoolean.reduce(function(acc, count) {
      return count ? acc + 1 : acc;
    }, 0);

    const filterBoolean1 = this.state.data.map(ele => {
      return ele.disliked;
    });

    const counter1 = filterBoolean1.reduce(function(acc, count) {
      return count ? acc + 1 : acc;
    }, 0);

    

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
        {!status && "loading"}
        {status &&
          this.state.quotes.map((element, key) => {
            return (
              <div key={key}>
                <Quote
                  id={element.id}
                  key={element.key}
                  counter={this.counter}
                  counter1={this.counter1}
                  liked={element.liked}
                  disliked={element.disliked}
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
