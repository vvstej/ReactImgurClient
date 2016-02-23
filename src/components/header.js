var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Actions = require('../actions/');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
module.exports = React.createClass({displayName: "exports",
  mixins:[
    Reflux.listenTo(TopicStore,'onChange')
  ],
  getInitialState : function(){
    return {
      topics : []
    }
  },
  componentWillMount: function(){
    Actions.getTopics();
  },
  render : function(){
    return React.createElement("nav", {className: "navbar navbar-default header"}, 
      React.createElement("div", {className: "container-fluid"}, 
        React.createElement(Link, {to: "/", className: "navbar-brand"}, 
          "Imgur Browser"
        ), 
        React.createElement("ul", {className: "nav navbar-nav navbar-right"}, 
          this.renderTopics()
        )
      )
    )
  },
  renderTopics : function(){
    return this.state.topics.slice(0,4).map(function(topic){
      return React.createElement("li", {key: topic.id}, 
        React.createElement(Link, {activeClassName: "active", to: "topics/"+topic.id}, 
          topic.name
        )
      )
    })
  },
  onChange : function(event, topics){
    this.setState({
      topics : topics
    });
  }
})