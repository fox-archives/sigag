// Create a progress bar that shows the timer that counts down
let bar = new ProgressBar.Circle("#countdown", {
  duration: 60000,
  color: "#868e96",
  // This has to be the same size as the maximum width to prevent clipping
  strokeWidth: 5,
  trailWidth: 0,
  easing: "linear",
  text: { autoStyleContainer: true },
  from: { color: "#343a40", width: 5 },
  to: { color: "#343a40", width: 5 },

  // Set default step function for all animate calls
  step: helper.progressBarStep

});

bar.text.style.fontFamily = "robotomedium";
bar.text.style.fontSize = "4rem";
