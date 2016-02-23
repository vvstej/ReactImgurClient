var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ImagePreview = require('./image-preview');
module.exports = React.createClass({displayName: "exports",
  mixins:[
    Reflux.listenTo(ImageStore,'onChange')
  ],
  getInitialState: function(){
    return{
      images:[]
    }
  },
  componentWillMount : function(){
    Actions.getImages(this.props.params.id);
  },
  componentWillReceiveProps : function(newProps){
    Actions.getImages(newProps.params.id);
  },
  onChange : function(event, images){
    this.setState({
      images:images
    })
  },
  render : function(){
    return React.createElement("div", null, 
      this.renderImages()
    )
  },
  renderImages : function(){
    return this.state.images.slice(0,20).map(function(image){
      return React.createElement(ImagePreview, React.__spread({key: image.id},  image))
    })
  }
});