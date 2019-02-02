// Converts minutes and seconds to value of just minutes, taking away all seconds (3 min 7 sec => 3)
function toTotalMinutes(seconds) {
  return Math.floor(seconds / 60) ;
}

// Converts minutes and seconds to value of just seconds, taking away all minutes (3 min 7 sec => 7)
function toRemainingSeconds(seconds) {
  // Makes sure that if remaning seconds is less than 10, put an extra 0, making it two digits
  if (seconds % 60 < 10) {
    return "0" + seconds % 60;
  }
  else {
    return seconds % 60;
  }
}

// Create a progress bar that shows the timer that counts down
let bar = new ProgressBar.Circle('#countdown', {
  color: '#868e96',
  // This has to be the same size as the maximum width to prevent clipping
  strokeWidth: 5,
  trailWidth: 0,
  easing: 'linear',
  duration: timer.startTime * 1000,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#343a40', width: 5 },
  to: { color: '#343a40', width: 5 },

  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    // circle.setText(circle.value());
    // "value" is the value of progress bar at a certain point (0 < value < state.duration) The timer.StartTime after circle.value() originally was 25
    let value = timer.startTime - Math.round(circle.value() * timer.startTime);
    if (value === 0) {
      circle.setText('0:00');
    }
    else {
      circle.setText(toTotalMinutes(value) + ":" + toRemainingSeconds(value));
    }
  }

});
bar.text.style.fontFamily = 'robotomedium';
bar.text.style.fontSize = '4rem';
