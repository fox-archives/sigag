// Changes text by slider, position of slider, and button text of all sliders
function updateAllIntervalComponents(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
  changeSliderText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
  changeSliderPosition(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
  changeCustomIntervalText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
}

// Updates the text (above the slider) for a type of break/work text, depending on value of 'sliderNumber'
function updateOnSliderOnMove(sliderNumber) {
  if(sliderNumber === 'work')
  {
    document.getElementById("work-duration-text").innerHTML = "Work: " + document.getElementById("work-duration").value + " minutes";
    document.getElementById("custom-interval-work").innerHTML = document.getElementById("work-duration").value;
  }
  if(sliderNumber === 'break')
  {
    document.getElementById("short-break-duration-text").innerHTML = "Break: " + document.getElementById("short-break-duration").value + " minutes";
    document.getElementById("custom-interval-break").innerHTML = document.getElementById("short-break-duration").value;
  }
  if(sliderNumber === 'long-break')
  {
    document.getElementById("long-break-duration-text").innerHTML = "Long Break: " + document.getElementById("long-break-duration").value + " minutes";
  }
  if(sliderNumber === 'interval')
  {
    document.getElementById("long-break-interval-text").innerHTML = "Interval: " + Math.round(document.getElementById("long-break-interval").value);
  }
}

// Changes text above the slider
function changeSliderText (workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
  document.getElementById("work-duration-text").innerHTML = "Work: " + workDuration + " minutes";
  document.getElementById("short-break-duration-text").innerHTML = "Break: " + shortBreakDuration + " minutes";
  document.getElementById("long-break-duration-text").innerHTML = "Long Break: " + longBreakDuration + " minutes";
  document.getElementById("long-break-interval-text").innerHTML = "Interval: " + longBreakInterval;
}

// Change slider positions (values)
function changeSliderPosition(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
  document.getElementById("work-duration").value = workDuration;
  document.getElementById("short-break-duration").value = shortBreakDuration;
  document.getElementById("long-break-duration").value = longBreakDuration;
  document.getElementById("long-break-interval").value = longBreakInterval;
}

// Changes the values of text in the customInterval button
function changeCustomIntervalText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
  document.getElementById("custom-interval-work").innerHTML = workDuration;
  document.getElementById("custom-interval-break").innerHTML = shortBreakDuration;
}

function createTimers(input) {
  timersData = {
    workDuration: document.getElementById("work-duration").value,
    shortBreakDuration: document.getElementById("short-break-duration").value,
    longBreakDuration: document.getElementById("long-break-duration").value,
    longBreakInterval: document.getElementById("long-break-interval").value
  };

  for(let key in timersData) {
    timersData[key] = parseInt(timersData[key]);
  }

  // Create a group of timers with the given data
  timerGroup = createTimerGroup(timersData);

  if(input === "startTimer") {
    startTimerGroup(timerGroup, bar);
  }
}
