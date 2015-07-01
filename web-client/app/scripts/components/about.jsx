'use strict';

define(function (require, exports) {
  var React = require('react');
  var Router = require('react-router');
  var RouteHandler = Router.RouteHandler;

  class About extends React.Component {
    render() {
      return (
        <div>ABOUT
        <RouteHandler/>
        </div>
      )
    };
  }

  class AboutId extends React.Component {
    render() {
      return (
        <div>ABOUT {this.props.params.id}</div>
      )
    }
  }

  exports.About = About;
  exports.AboutId = AboutId;
});