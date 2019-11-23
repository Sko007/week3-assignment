import React, { Component } from "react";
import "./Quote.css";

class Quote extends Component {
  state = { Color: "", liked: null, disliked: null, id: null };

  handleClick = event => {
    console.log("value of passed down props", this.props.id);

    this.setState({
      Color: "green",
      liked: true,
      disliked: false
    });

    this.props.counter(this.state.liked, this.state.disliked);
  };

  handleClick1 = () => {

    this.setState({
      Color: "red",
      disliked: true,
      liked: false
    });
    this.props.counter1(this.state.liked, this.state.disliked);
  };

  render() {


    return (
      <div>
        <p style={{ color: this.state.Color }}>{this.props.paragraph}</p>
        <h3>By: {this.props.author}</h3>
        <button onClick={this.handleClick}>like</button>
        <button onClick={this.handleClick1}>dislike</button>
        <hr></hr>
      </div>
    );
  }
}

export default Quote;
