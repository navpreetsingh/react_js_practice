var React = require("react");
var ListItem = require("./list_item");

module.exports = React.createClass({
	whenClickedItem: function(item) {
		this.props.handleItemClick(this.props.item);		
	},	
	render: function() {
		var list = this.props.items.map(function(item) {			
			return <ListItem item={item} whenItemClicked={this.whenClickedItem} />
		}.bind(this));
		return  <ul className={"dropdown-menu " + (this.props.open ? "show" : "") }>
				    {list}
				</ul>
	}
});