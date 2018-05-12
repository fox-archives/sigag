function updateAllIntervalComponents(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
  // Changes text by slider, position of slider, and button text of all sliders
  changeSliderText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
  changeSliderPosition(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
  changeCustomIntervalText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
}

function updateOnSliderOnMove(sliderNumber) {
  // Updates the text (above the slider) for a type of break/work text, depending on value of 'sliderNumber'
  // 0 for Work Duration
  // 1 for Short Break Duration
  // 2 for Long Break Duration
  // 3 for Long Break Interval

  if(sliderNumber == 0)
  {
    document.getElementById("work-duration-text").innerHTML = "Work: " + document.getElementById("work-duration").value + " minutes";
    document.getElementById("custom-interval-work").innerHTML = document.getElementById("work-duration").value;
  }
  if(sliderNumber == 1)
  {
    document.getElementById("short-break-duration-text").innerHTML = "Break: " + document.getElementById("short-break-duration").value + " minutes";
    document.getElementById("custom-interval-break").innerHTML = document.getElementById("short-break-duration").value;
  }
  if(sliderNumber == 2)
  {
    document.getElementById("long-break-duration-text").innerHTML = "Long Break: " + document.getElementById("long-break-duration").value + " minutes";
  }
  if(sliderNumber == 3)
  {
    document.getElementById("long-break-interval-text").innerHTML = "Interval: " + Math.round(document.getElementById("long-break-interval").value/10);
  }
}

function changeSliderText (workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
  // Changes text above the slider
  document.getElementById("work-duration-text").innerHTML = "Work: " + workDuration + " minutes";
  document.getElementById("short-break-duration-text").innerHTML = "Break: " + shortBreakDuration + " minutes";
  document.getElementById("long-break-duration-text").innerHTML = "Long Break: " + longBreakDuration + " minutes";
  document.getElementById("long-break-interval-text").innerHTML = "Interval: " + longBreakInterval;
}

function changeSliderPosition(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
  // Change slider positions (values)
  document.getElementById("work-duration").value = workDuration;
  document.getElementById("short-break-duration").value = shortBreakDuration;
  document.getElementById("long-break-duration").value = longBreakDuration;
  document.getElementById("long-break-interval").value = longBreakInterval*10;
}

function changeCustomIntervalText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
  // Changes the values of text in the customInterval button
  document.getElementById("custom-interval-work").innerHTML = workDuration;
  document.getElementById("custom-interval-break").innerHTML = shortBreakDuration;
}
