const {remote} = require('electron')
document.getElementById('close-application').addEventListener('click', closeWindow);
document.getElementById('minimize-application').addEventListener('click', minimizeWindow);

function closeWindow () {
  var window = remote.getCurrentWindow()
  window.close()
}

function minimizeWindow(){
  var window = remote.getCurrentWindow()
  window.minimize()
}
