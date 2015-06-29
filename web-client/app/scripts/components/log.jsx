'use strict'

define(function (require, exports) {
  var React = require('react');

  var HelloWorld = React.createClass({
    displayName : "HelloWorld",
    render : function () {
      return (
        <div>
          <h1>Hello World, welcome to Reactjs</h1>
          <p>test is browsersync works correctly</p>
        </div>
      );
    }
  });

  exports.HelloWorld = HelloWorld;
});