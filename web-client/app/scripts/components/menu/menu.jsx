'use strict';

define(function (require, exports) {
  var React = require('react');
  var Router = require('react-router');
  var RouteHandler = Router.RouteHandler;
  var MenuItem = require('components/menu/menuItems');

  class Menu extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div>
          <MenuItem.MenuItem name="sneaky" url="https://google.nl"/>
          <MenuItem.MenuItem name="google" url="https://mapleeurope.com"/>
        </div>
      );
    }
  }

  exports.Menu = Menu;
});