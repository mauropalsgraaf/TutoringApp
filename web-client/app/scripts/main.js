'use strict';

require.config({
  baseUrl : '/app/scripts',
  paths : {
    "react" : '../../node_modules/react/dist/react.min' || '' //suspressing error, the include from node modules gives error, but exists.
                                                              //By adding ||, is will include always
  }
});

require(['react', 'dist/components/log'], function (React, log) {
  React.render(React.createElement(log.HelloWorld, null), document.getElementsByTagName('body')[0]);
});