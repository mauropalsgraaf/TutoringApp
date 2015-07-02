'use strict';

require.config({
  baseUrl : '/app/dist',
  paths : {
    "react" : '../../node_modules/react/dist/react' || '',
    "react-router" : '../../node_modules/react-router/umd/ReactRouter.min' || ''
  }
});

require(['react', 'react-router', 'router/router'], function (React, Router, appRoutes) {
  Router.run(appRoutes.Routes, Router.HashLocation, function (Handler) {
    React.render(<Handler />, document.body);
  });
});