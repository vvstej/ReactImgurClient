var ReactDOM = require('react-dom');
var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  render : function(){
    return <div>
    {this.image()}
    </div>
  },

  image : function(){
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    return <img src={link} className="img-circle"/>
  }
})
