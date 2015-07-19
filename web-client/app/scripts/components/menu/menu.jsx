'use strict';

define(function (require, exports) {
  var React = require('react');
  var Router = require('react-router');
  var RouteHandler = Router.RouteHandler;
  var MenuItem = require('components/menu/MenuItems');

  class Menu extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div className="menu">
          <ul>
            <MenuItem.MenuItem name='Test1234' url='https://google.nl'/>
            <MenuItem.MenuItem name='google' url='https://mapleeurope.com'/>
            <MenuItem.MenuItem name='google' url='https://mapleeurope.com'/>
          </ul>
        </div>
      );
    }
  }

  exports.Menu = Menu;
});