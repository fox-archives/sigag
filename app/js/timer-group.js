// Only animates to zero if not already at zero
function animateTimerToZero() {
  return new Promise(resolve => {
    if(bar.value() > 0) {
      // This changes the animation of the bar
      bar.animate(0, {
        duration: 500,
        easing: "easeInOutQuad"
      }, resolve);
    }
    else { resolve() }
  })
}

function animateTimerToOne(newStartTime) {
  return new Promise(resolve => {
    // console.log(newStartTime);
    // This changes the animation of the bar
    bar.animate(1, {
      duration: newStartTime, // Replacing this with a number "fixes" the problem
      easing: "linear"
    }, resolve);
  })
}

function epsilon() {
  // This changes the animation of the bar
  bar.animate(.5, {
    duration: 333,
    easing: "easeInOutQuad"
  });
}

// This starts the next timer in the sequence. progressInTimerGroup gets bigger inside of the animateTimerToOne function
function startNextTimer(timersGroup, progressInTimerGroup) {
  // Set progressInTimeGroup to zero if we're at end of timersGroup array
  if(progressInTimerGroup === timersGroup.length) { progressInTimerGroup = 0; }

  // Make sure we replace the global timer object with the one we're currently about to use
  timer = timersGroup[progressInTimerGroup];

  // The actual looping happens in startNextTimer()
  animateTimerToZero()
  .then(() => {
    newStartTime = timersGroup[progressInTimerGroup].startTime;
    return animateTimerToOne(newStartTime);
  })
  .then(() => {
    startNextTimer(timersGroup, progressInTimerGroup + 1);
  })
}

// This is called from the DOM when "Apply" is pressed
function createTimerGroup() {
  // Data about the new timer (object with properties of long / short break / work timers etc.)
  timersData = getTimersData();
  timersData = helper.convertStingPropsToNumber(timersData);

  // TODO: Clean this up
  timersGroup = [];
  for(let i = 0; i < timersData.longBreakInterval; i++) {
  	workTimer = new Timer(timersData.workDuration * 60000);
  	smallBreakTimer = new Timer(timersData.shortBreakDuration * 60000)

  	timersGroup.push(workTimer);
  	timersGroup.push(smallBreakTimer);
  }
  longBreakTimer = new Timer(timersData.longBreakDuration * 60000);
  timersGroup.push(longBreakTimer);

  return timersGroup;
}

// This is called from the DOM when "Save" is pressed
function createTimerGroupAndStart() {
  let timersGroup = createTimerGroup()
  startNextTimer(timersGroup, 0);
}