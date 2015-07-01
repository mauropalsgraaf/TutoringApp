'use strict';

require.config({
  baseUrl : '/app/scripts',
  paths : {
    "react" : '../../node_modules/react/dist/react' || '',
    "react-router" : '../../node_modules/react-router/umd/ReactRouter.min' || '',
    "react-hashlocation" : '../../node_modules/react-router/lib/location/HashLocation' || ''
  }
});

require(['react', 'react-router', 'dist/router/router'], function (React, Router, appRoutes) {

  console.log(appRoutes.Routes);

  Router.run(appRoutes.Routes, Router.HashLocation, function (Handler, state) {
    React.render(<Handler />, document.body);
  });
});