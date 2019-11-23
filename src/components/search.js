import React, { Component } from 'react';

export default class Search extends Component {
  state = {name:''}


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getData(this.state.name)
  }

  handleChange = (event) => {

    console.log("event.target", event.target.name, "name handleChange ")
    this.setState
    ({  [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="search" />
        </form>
      </div>
    )
  }
}