const { remote } = require('electron');
document.getElementById('close-application').addEventListener('click', closeWindow);
document.getElementById('minimize-application').addEventListener('click', minimizeWindow);

// Close current working window
function closeWindow() {
  let window = remote.getCurrentWindow();
  window.close();
}

// Minimize current working window
function minimizeWindow() {
  let window = remote.getCurrentWindow();
  window.minimize();
}
