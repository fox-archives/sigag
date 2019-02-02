function createTimerGroup(timersData) {
  timers = [];

  for(let i = 0; i < timersData.longBreakInterval; i++) {
  	workTimer = new Timer(timersData.workDuration);
  	smallBreakTimer = new Timer(timersData.shortBreakDuration)

  	timers.push(workTimer);
  	timers.push(smallBreakTimer);
  }
  longBreakTimer = new Timer(timersData.longBreakDuration);
  timers.push(longBreakTimer);

  return timers;
}

function startTimerGroup(timersGroup, bar) {
	console.log(timersGroup);
	bar.set(0)
	bar.animate(1, {
    duration: timersGroup[0].startTime * 1000,
       // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    // circle.setText(circle.value());
    // "value" is the value of progress bar at a certain point (0 < value < state.duration) The timer.StartTime after circle.value() originally was 25
    let value = timersGroup[0].startTime - Math.round(circle.value() * timersGroup[0].startTime);
    if (value === 0) {
      circle.setText('0:00');
    }
    else {
      circle.setText(toTotalMinutes(value) + ":" + toRemainingSeconds(value));
    }
  }
	}, function() {
	    console.log('Animation has finished');
	});
}  