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
	convertStingPropsToNumber: function(timersData) {
		for(let key in timersData) {
		    timersData[key] = parseInt(timersData[key]);
		}
  		return timersData;
	}
}
