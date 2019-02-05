// Create a progress bar that shows the timer that counts down
let bar = new ProgressBar.Circle("#countdown", {
  duration: timer.startTime,
  color: "#868e96",
  // This has to be the same size as the maximum width to prevent clipping
  strokeWidth: 5,
  trailWidth: 0,
  easing: "linear",
  text: { autoStyleContainer: true },
  from: { color: "#343a40", width: 5 },
  to: { color: "#343a40", width: 5 },

  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute("stroke", state.color);
    circle.path.setAttribute("stroke-width", state.width);


    // "value" is the value of progress bar at a certain point (0 < value < state.duration) The timer.StartTime after circle.value() originally was 25
    startTimeInSeconds = timer.startTime / 1000;
    let value = startTimeInSeconds - Math.round(circle.value() * startTimeInSeconds);
    if (value === 0) {
      circle.setText("0:00");
    }
    else {
      circle.setText(helper.toTotalMinutes(value) + ":" + helper.toRemainingSeconds(value));
    }
  },

});

bar.text.style.fontFamily = "robotomedium";
bar.text.style.fontSize = "4rem";
