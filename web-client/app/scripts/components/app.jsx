'use strict';

define(function (require, exports) {
  var React = require("react");
  var Router = require("react-router");
  var RouteHandler = Router.RouteHandler;
  var Menu = require("components/menu/Menu");

  class app extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div>
          <Menu.Menu />
        </div>
      );
    }
  }

  exports.App = app;
});