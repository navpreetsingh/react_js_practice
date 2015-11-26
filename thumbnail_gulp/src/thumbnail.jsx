var React = require("react");
var Badge = require("./badge");  // ./ indicates in current directory

module.exports = React.createClass({
	render: function() {
		return <div className="thumbnail">
			      	<img src={this.props.imageUrl} alt="Image"/>
			      	<div className="caption">
				        <h3>{this.props.header}</h3>
				        <p>{this.props.description}</p>
				        <p>
				        	<Badge title = {this.props.title} number = {this.props.number} />					        	
				        </p>
			      	</div>
			    </div>
	}
});