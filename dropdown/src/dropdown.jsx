// We need to show a button and a list
// This component should know when to show the list
// based on when the user clicks on a button

var React = require("react");
var Button = require("./button");
var List = require("./list");
var ListItem = require("./list_item");

module.exports = React.createClass({
	handleClick: function() {
		alert('button clicked from dropdown');
	},	
	render: function() {
		var list = this.props.items.map(function(item){
			return <ListItem item={item} />
		});
		return  <div className="dropdown">
					<Button 
						whenClicked={this.handleClick} 
						className="btn-default" 
						title={this.props.title} 
						subTitleClassName="caret" />
						// <List items={this.props.items} />					
						<ul>
							{list}
						</ul>
				</div>
	}
})