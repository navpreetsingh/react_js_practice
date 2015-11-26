// var ThumbnailList = require("thumbnail-list");

var options = {
	thumbnail_data: [
		{
			title: "Sent",
			number: 12,
			header: "Learn React",
			description: "React is fantastic new library for making fast, dynamic pages.",
			imageUrl: "http://files.www.newmediacampaigns.com/blog-drafts/refactoring-react-components-to-es6-classes/react-thumb-process-s300x-q80-t1428000547.png",	
		},
		{
			title: "Show Courses",
			number: 25,
			header: "Learn Gulp",
			description: "Gulp will speed up your development workflow.",
			imageUrl: "http://blog.josezamudio.me/content/images/2015/07/gulp-1.jpg",	
		},
	]
	
}

// React, please render this class
var element = React.createElement(ThumbnailList, options);

//React, after you render this class, please place it in my body tag
React.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
	render: function() {
		return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
			  	this.props.title, " ", React.createElement("span", {className: "badge"}, " ", this.props.number, " ")
			)
	}
});
var Thumbnail = require("thumbnail"); 

var ThumbnailList = React.createClass({displayName: "ThumbnailList",
	render: function(){
		var list = this.props.thumbnail_data.map(function(thumbnail_props){
			return React.createElement(Thumbnail, React.__spread({},  thumbnail_props)) 
		});
		return React.createElement("div", null, 
					list
				)
	}
});
var Badge = require("badge");

var Thumbnail = React.createClass({displayName: "Thumbnail",
	render: function() {
		return React.createElement("div", {className: "thumbnail"}, 
			      	React.createElement("img", {src: this.props.imageUrl, alt: "Image"}), 
			      	React.createElement("div", {className: "caption"}, 
				        React.createElement("h3", null, this.props.header), 
				        React.createElement("p", null, this.props.description), 
				        React.createElement("p", null, 
				        	React.createElement(Badge, {title: this.props.title, number: this.props.number})					        	
				        )
			      	)
			    )
	}
});