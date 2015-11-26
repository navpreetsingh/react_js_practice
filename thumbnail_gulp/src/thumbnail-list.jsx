var React = require("react");
var Thumbnail = require("./thumbnail");

module.exports = React.createClass({
	render: function(){
		var list = this.props.thumbnail_data.map(function(thumbnail_props){
			return <Thumbnail {...thumbnail_props} /> 
		});
		return <div>
					{list}
				</div>
	}
});