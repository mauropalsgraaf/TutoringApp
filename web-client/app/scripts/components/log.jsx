'use strict';

var React = require('../../../../node_modules/react/dist/react');

class Widget extends React.Component {

  constructor() {
    super();
    this.state = {
      displayNumber : 1
    };
    this. _handleClick = this. _handleClick.bind(this);
  };

  render() {
    return (
      <div>{this.state.displayNumber}<button onclick={this._handleClick}></button></div>
    )
  };

  _handleClick() {
    console.log("test");
    this.setState({displayNumber : this.state.displayNumber + 1})
  }
}

module.exports = Widget;