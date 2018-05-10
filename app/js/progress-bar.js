function Timer(startTime, endTime)
{
    this.startTime = startTime;
    this.endTime = endTime;

    this.changeStartTime = function(newStartTime) {
      this.startTime = newStartTime
    };
    this.changeEndTime = function(newEndTime) {
      this.endTime = newEndTime;
    };
}

var timer = new Timer(15, 0);
console.log(timer.startTime);

timer.changeStartTime(30);
console.log(timer.startTime);

//Create a progress bar that shows the timer that counts down
var bar = new ProgressBar.Circle('#countdown', {
  color: '#868e96',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 0,
  easing: 'easeInOut',
  duration: 1000,
  text: {
    autoStyleContainer: true
  },
  from: { color: /*'#adb5bd'*/'#343a40', width: 5 },
  to: { color: '#343a40', width: 5 },
  // Set default step function for all animate calls

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 25);
    if (value === 0) {
      circle.setText('');
    }
    else {
      circle.setText(value);
    }
  }

});
bar.text.style.fontFamily = 'robotomedium';
bar.text.style.fontSize = '4rem';

bar.animate(0.5);
