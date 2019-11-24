import React, { Component } from "react";
import "./Quote.css";

class Quote extends Component {
  state = { color: "", liked: null, disliked: null, id: null };

  handleClick = event => {
    console.log("value of passed down props", this.props.id);

    this.setState({
      id : this.props.id,
      color: "green"
      
    });

    this.props.counter(this.state.id, this.state.color);
  };

  handleClick1 = () => {
    this.setState({
      id : this.props.id,
      color: "red"
      
    });
    this.props.counter1(this.state.id, this.state.color);
  };

  render() {


    

    if (this.props.load === true) {
      return <p>Loading</p>;
    } else {
      return (
        <div>
          <p style={{ color: this.state.color }}>{this.props.paragraph}</p>
          <h3>By: {this.props.author}</h3>
          <button onClick={this.handleClick}>like</button>
          <button onClick={this.handleClick1}>dislike</button>
          <hr></hr>
        </div>
      );
    }
  }
}

export default Quote;
