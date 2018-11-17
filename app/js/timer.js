//Converts minutes and seconds to just seconds
function toSecondsOnly(minutes, seconds) {
  return ((minutes * 60) + seconds);
}

// Converts just seconds to either minutes or seconds
function toMinutesOrSeconds(timeInSeconds, isMinutes)
{
  if(isMinutes == true)
  {
    return Math.floor(timeInSeconds / 60);
  }
  if(isMinutes == false)
  {
    // If the time im seconds is less than 10, put a 0 beore the ones place
    if (timeInSeconds % 60 < 10)
      return "0" + timeInSeconds % 60;
    else {
      return timeInSeconds % 60;
    }
  }
  else
  {
    console.log("Invalid Parameter in the toMinutesOrSeconds method");
  }
}

// Create a constructor for a Timer object, which has parameters startTime, and currentTime
function Timer(startTimeMinutes, startTimeSeconds)
{
    // Variables in seconds only (converted using toSecondsOnly function)
    this.startTime = toSecondsOnly(startTimeMinutes, startTimeSeconds);

    // Variables, each either seconds or minutes
    this.startTimeMinutesOnly = startTimeMinutes;
    this.startTimeSecondsOnly = startTimeSeconds;

    // Function that sets the start time in seconds, takes parameters minutes and seconds (converted using the toSecondsOnly() method)
    this.setStartTime = function(startTimeMinutes, startTimeSeconds) {
      this.startTime = toSecondsOnly(startTimeMinutes, startTimeSeconds);
    };
}
//Create new Timer object named "timer" starts at 1 minute 0 seconds and ends at 0 minutes and 0 seconds. The time starts counting down at 1 minute and 0 seconds
var timer = new Timer(1, 5, 1, 0);
