var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');

module.exports = React.createClass({displayName: "exports",
  render : function(){
    return React.createElement("div", null, 
    this.image()
    )
  },

  image : function(){
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';
    return React.createElement("img", {src: link, className: "img-circle"})
  }
})