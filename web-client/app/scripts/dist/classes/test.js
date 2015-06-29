'use strict';

define(function (require, exports) {

  var React = require('react');

  var HelloWorld = React.createClass({
    displayName: 'HelloWorld',
    render: function render() {
      return React.createElement('div', null, React.createElement('h1', null, 'Hello World, welcome to Reactjs!'), React.createElement('p', null, 'test is browsersync works correctly!'));
    }
  });

  exports.HelloWorld = HelloWorld;
});