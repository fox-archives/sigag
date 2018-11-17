var statisticsOpen = false;
var customTimerOpen = false;

// Function that either opens or closes customInterval sidebar, depending on parameter, and if the statistics sidebar is open
function toggleCustomIntervalSidebar(isOpen) {
  // Opens customInterval sidebar, but only if the statistics sidebar is not open
  if(isOpen === 1 && statisticsOpen == false)
  {
    customTimerOpen = true;
    document.getElementById("change-interval-sidebar").style.left="0"
    document.getElementById("change-interval-sidebar").style.width="100%"
  }
  // Closes the customInterval sidebar
  if(isOpen === 0)
  {
    customTimerOpen = false;
    document.getElementById("change-interval-sidebar").style.left="-100%"
  }
}

// Function that either opens or closes statistics sidebar, depending on parameter, and if the customInterval sidebar is open
function toggleStatisticsSidebar(isOpen) {
  // Opens up statistics sidebar, but only if the intervalSidebar is not open
  if(isOpen === 1 && customTimerOpen == false)
  {
    statisticsOpen = true;
    document.getElementById("get-statistics").style.left="0"
    document.getElementById("get-statistics").style.width="100%"
  }
  // Closes the statisticsSidebar
  if(isOpen === 0)
  {
    statisticsOpen = false;
    document.getElementById("get-statistics").style.left="-100%"
  }
}
