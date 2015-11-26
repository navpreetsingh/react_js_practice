var React = require("react");
var ThumbnailList = require("./thumbnail-list");

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