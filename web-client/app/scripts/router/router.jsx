'use strict';

define(function (require, exports) {
  var React = require('react');
  var Router = require('react-router');
  var Route = Router.Route;
  var App = require('dist/components/app');
  var About = require('dist/components/about');

  exports.Routes = (
    <Route path="/" handler={App.App}>
      <Route path="about" handler={About.About}>
        <Route path=":id" handler={About.AboutId}/>
        </Route>
    </Route>
  );
});