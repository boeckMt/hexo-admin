var React = require('react/addons')
var Link = require('react-router').Link

var divStyle = {
  whiteSpace: 'nowrap'
};

var Preview = React.createClass({
  getInitialState: function() {
    return {};
  },

  render: function () {

    var preview_url = '../'

    return (
      <div className="preview" style={divStyle}>
      <iframe src={preview_url} name="targetframe" allowTransparency="true" scrolling="yes" frameborder="0">
      </iframe>

      </div>
    );
  }
})

module.exports = Preview
