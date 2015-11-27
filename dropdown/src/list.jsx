var React = require("react");
var ListItem = require("./list_item");

module.exports = React.createClass({	
	render: function() {
		list = this.props.items.map(function(item) {
			return <ListItem item={item} />
		})
		return  <ul>
				    {list}
				</ul>
	}
});