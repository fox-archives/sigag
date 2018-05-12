//Converts minutes and seconds to just seconds
function toSecondsOnly(minutes, seconds) {
  return ((minutes * 60) + seconds);
}

// Create a constructor for a Timer object, which has parameters startTime, currentTime, and endTime.
function Timer(startTimeMinutes, startTimeSeconds, currentTimeMinutes, currentTimeSeconds, endTimeMinutes, endTimeSeconds)
{
    //Defining variables
    this.startTime = toSecondsOnly(startTimeMinutes, startTimeSeconds);
    this.currentTime = toSecondsOnly(currentTimeMinutes, currentTimeSeconds);
    this.endTime = toSecondsOnly(endTimeMinutes, endTimeSeconds);

    // Sets the start time in seconds, takes parameters minutes and seconds (converted using the toSecondsOnly() method)
    this.setStartTime = function(startTimeMinutes, startTimeSeconds) {
      this.startTime = toSecondsOnly(startTimeMinutes, startTimeSeconds);
    };

    // Sets the end time in seconds, takes parameters minutes and seconds (converted using the toSecondsOnly() method)
    this.setEndTime = function(endTimeMinutes, endTimeSeconds) {
      this.endTime = toSecondsOnly(endTimeMinytes, endTimeSecodns);
    };

    // Subtracts the current time by a certain increment, in seconds (usually one second)
    this.subtractCurrentTime = function(timeToSubtract) {
      this.currentTime -= timeToSubtract;
    // Note: Will not work if write: this.currentTime = currentTime - timeToSubtract
    };

    // Adds the current time by a certain increment, in seconds
    this.addCurrentTime = function(timeToAdd) {
      this.currentTime += timeToAdd;
      // Note: Will not work if write: this.currentTime = currentTime - timeToSubtract
    };

    //Sets the current time to a particular value (in seconds)
    this.setTime = function(setTimeMinutes, setTimeSeconds) {
      this.currentTime = toSecondsOnly(setTimeMinutes, setTimeSeconds);
    }
}
//Create new Timer object named "timer" starts at 1 minute 0 seconds and ends at 0 minutes and 0 seconds. The time starts counting down at 1 minute and 0 seconds
var timer = new Timer(1, 0, 1, 0, 0, 0);

function countDownTimer() {
  timer.subtractCurrentTime(1);
  console.log(timer.currentTime);
}

// Counts down the timer by 1 every 1000 milliseconds
var counter = setInterval(countDownTimer, 1000);
