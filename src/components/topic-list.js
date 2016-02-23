var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({displayName: "exports",
  mixins: [
    Reflux.listenTo(TopicStore, 'onChange')
  ],
  getInitialState : function(){
    return {
      topics : []
    }
  },
  onChange : function(event, topics){
    this.setState({
      topics : topics
    });
  },

  componentWillMount : function(){
    // TopicStore.getTopics()
    //   .then(function(){
    //     this.setState({
    //       topics : TopicStore.topics
    //     })
    //   }.bind(this))
    Actions.getTopics();
  },
  render : function(){
    return React.createElement("div", {className: "list-group"}, 
      this.renderTopics()
    )
  },

  renderTopics: function(){
    return this.state.topics.slice(0,4).map(function(topic){
      return React.createElement(Link, {to: "topics/"+topic.id, className: "list-group-item", key: topic.id}, 
        React.createElement("h4", null, topic.name), 
        React.createElement("p", null, topic.description)
      )
    });
  }
})