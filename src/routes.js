var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Main = require('./components/main');
var Topic = require('./components/topic');
module.exports = (
  React.createElement(Router, null, 
    React.createElement(Route, {path: "/", component: Main}, 
      React.createElement(Route, {path: "topics/:id", component: Topic}
      )
    )
  )
)