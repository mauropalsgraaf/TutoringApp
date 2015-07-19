'use strict';

define(function (require, exports) {
  var React = require('react');
  var Router = require('react-router');
  var Route = Router.Route;
  var App = require('components/App');

  exports.Routes = (
    <Route path="/" handler={App.App} />
  );
});