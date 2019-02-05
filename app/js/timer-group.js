// Only animates to zero if not already at zero
function animateTimerToZero() {
  return new Promise(resolve => {
    if(bar.value() > 0) {
      // This changes the animation of the bar
      bar.animate(0, {
        duration: 333,
        easing: "easeInOutQuad"
      }, resolve);
    }
    else { resolve() }
  })
}

function animateTimerToOne(newStartTime) {
  return new Promise(resolve => {
    // This changes the animation of the bar
    bar.animate(0, {
      duration: newStartTime * 1000,
      easing: "easeInOutQuad"
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
  progressInTimerGroup = (progressInTimerGroup === timersGroup.length ? 0 : progressInTimerGroup);

  // The actual looping happens in startNextTimer()
  animateTimerToZero()
  .then(() => {
    console.log("phase 1");
    newStartTime = timersGroup[progressInTimerGroup].startTime;
    return animateTimerToOne(newStartTime);
  })
  .then(() => startNextTimer(timersGroup, progressInTimerGroup + 1))
}

// This is called from the DOM when "Apply" is pressed
function createTimerGroup() {
  // Data about the new timer (object with properties of long / short break / work timers etc.)
  timersData = getTimersData();
  timersData = helper.convertStingPropsToNumber(timersData);

  // TODO: Clean this up
  timersGroup = [];
  for(let i = 0; i < timersData.longBreakInterval; i++) {
  	workTimer = new Timer(timersData.workDuration);
  	smallBreakTimer = new Timer(timersData.shortBreakDuration)

  	timersGroup.push(workTimer);
  	timersGroup.push(smallBreakTimer);
  }
  longBreakTimer = new Timer(timersData.longBreakDuration);
  timersGroup.push(longBreakTimer);

  console.log(timersGroup)
  return timersGroup;
}

// This is called from the DOM when "Save" is pressed
function createTimerGroupAndStart() {
  let timersGroup = createTimerGroup()
  startNextTimer(timersGroup, 0);
}