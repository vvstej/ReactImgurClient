var ReactDOM = require('react-dom');
var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');
var Actions = require('../actions');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
module.exports = React.createClass({
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
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },

  renderTopics: function(){
    return this.state.topics.slice(0,4).map(function(topic){
      return <Link to={"topics/"+topic.id} className="list-group-item" key={topic.id}>
        <h4>{topic.name}</h4>
        <p>{topic.description}</p>
      </Link>
    });
  }
})
