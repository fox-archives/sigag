// Create a constructor for a Timer object, which has parameters startTime
function Timer(startTime) {
    // Variables in seconds only (converted using toSecondsOnly function)
    this.startTime = startTime;
    
    this.start = function() {
      bar.animate(1);
    };

    this.pause = function() {
      bar.stop();
    }

    this.restart = function() {
      bar.set(0);
    };
}

// Create new Timer object named "timer" starts at 1 minute (goes down to zero)
let timer = new Timer(65000);
