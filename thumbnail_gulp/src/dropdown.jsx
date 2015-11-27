// We need to show a button and a list
// This component should know when user click the button

render: function() {
	var visible;

	if(this.state.dropdownOpen) {
		visible = "visible";		
	}
	else {
		visible = "hidden";
	}

	return <div class="dropdown">
			  <Badge/>
			  <UnorderedList/>
			</div>
}