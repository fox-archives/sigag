//Converts minutes and seconds to just seconds
function toSecondsOnly(minutes, seconds) {
  return ((minutes * 60) + seconds);
}

function toMinutesOrSeconds(timeInSeconds, isMinutes)
{
  if(isMinutes == true)
  {
    return Math.floor(timeInSeconds / 60);
  }
  if(isMinutes == false)
  {
    return timeInSeconds % 60;
  }
  else
  {
    console.log("Invalid Parameter in the toMinutesOrSeconds method");
  }
}

// Create a constructor for a Timer object, which has parameters startTime, and currentTime
function Timer(startTimeMinutes, startTimeSeconds, currentTimeMinutes, currentTimeSeconds)
{
    // Variables in seconds only
    this.startTime = toSecondsOnly(startTimeMinutes, startTimeSeconds);
    this.currentTime = toSecondsOnly(currentTimeMinutes, currentTimeSeconds);

    // Variables, each either seconds or minutes
    this.startTimeMinutesOnly = startTimeMinutes;
    this.startTimeSecondsOnly = startTimeSeconds;

    // Sets the start time in seconds, takes parameters minutes and seconds (converted using the toSecondsOnly() method)
    this.setStartTime = function(startTimeMinutes, startTimeSeconds) {
      this.startTime = toSecondsOnly(startTimeMinutes, startTimeSeconds);
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
var timer = new Timer(1, 5, 1, 0);
