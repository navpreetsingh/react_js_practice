var React = require("react");

module.exports = React.createClass({
	handleClick: function() {
		// debugger;
		this.props.whenItemClicked(this.props.item);		
		// console.log("I am clicked");
	},
	render: function() {
		return <li className={this.props.className}> 
					<a onClick={this.handleClick}> 
						{this.props.item} 
					</a>
				</li>
	}
});