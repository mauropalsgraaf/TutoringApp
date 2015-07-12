'use strict';

define(function (require, exports) {
  var React = require('react');

  class MenuItem extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <li>
          <a href={this.props.url}>{this.props.name}</a>
        </li>
      );
    }
  }

  exports.MenuItem = MenuItem;
});