var bar = new ProgressBar.Circle('#countdown', {
  color: '#868e96',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 0,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#adb5bd', width: 4 },
  to: { color: '#343a40', width: 4 },
  // Set default step function for all animate calls

  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    }
    else {
      circle.setText(value);
    }
  }

});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '4rem';

bar.animate(1.0);
