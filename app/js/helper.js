const helper = {
	toTotalMinutes: function(seconds) {
  		return Math.floor(seconds / 60) ;
	},
	toRemainingSeconds: function(seconds) {
	  // Makes sure that if remaning seconds is less than 10, put an extra 0, making it two digits
	  if (seconds % 60 < 10) {
	    return "0" + seconds % 60;
	  }
	  else {
	    return seconds % 60;
	  }
	},
	progressBarStep: function(state, circle) {
		circle.path.setAttribute("stroke", state.color);
	    circle.path.setAttribute("stroke-width", state.width);

	    // circle.setText(circle.value());
	    // "value" is the value of progress bar at a certain point (0 < value < state.duration) The timer.StartTime after circle.value() originally was 25
	    let value = timer.startTime - Math.round(circle.value() * timer.startTime);
	    if (value === 0) {
	      circle.setText("0:00");
	    }
	    else {
	      circle.setText(helper.toTotalMinutes(value) + ":" + helper.toRemainingSeconds(value));
	    }
	},
	convertStingPropsToNumber: function(timersData) {
		for(let key in timersData) {
		    timersData[key] = parseInt(timersData[key]);
		}
  		return timersData;
	}
}
