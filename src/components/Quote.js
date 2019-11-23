import React, { Component } from "react";
import "./Quote.css"

class Quote extends Component {
  state = {
            Color: ""
  };


  handleClick = (event) => {
    this.setState({
        
        Color: "red"
    });
  };

  handleClick1 = (event) => {
    this.setState({
        
        Color: "green"
    });
  };




  render() {
    return (
      <div>
       
          
            
              <p style={{backgroundColor: this.state.Color}} >{this.props.paragraph}</p>
              <h3>By: {this.props.author}</h3>
              <button onClick={this.handleClick1}>like</button>
              <button onClick={this.handleClick}>dislike</button>
              <hr></hr>
          
         
      </div>
    );
  }
}

export default Quote;
