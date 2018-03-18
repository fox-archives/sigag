/*window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 2000,
        easing: 'easeInOut',
        strokeWidth: '4'


    });

    circle.animate(1);
}; */

var bar = new ProgressBar.Circle('#countdown', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 0,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#C6426E', width: 4 },
  to: { color: '#642B73', width: 4 },
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
