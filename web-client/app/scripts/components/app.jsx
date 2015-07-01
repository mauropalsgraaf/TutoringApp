'use strict';

define(function (require, exports) {
  var React = require('react');
  var Router = require('react-router');
  var RouteHandler = Router.RouteHandler;

  class App extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <div>APP
          <RouteHandler/>
        </div>
      );
    }
  }
  
  exports.App = App;
});