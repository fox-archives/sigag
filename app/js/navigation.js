var statisticsOpen = false;
var customTimerOpen = false;

function toggleCustomIntervalSidebar(isOpen) {
  if(isOpen === 1 && statisticsOpen == false)  //Open the sidebar
  {
    customTimerOpen = true;
    document.getElementById("change-interval-sidebar").style.left="0"
    document.getElementById("change-interval-sidebar").style.width="100%"
  }
  if(isOpen === 0)  //Close the sidebar
  {
    customTimerOpen = false;
    document.getElementById("change-interval-sidebar").style.left="-100%"
  }
}

//Opens and closes the statistics sidebar
function toggleStatisticsSidebar(isOpen) {
  if(isOpen === 1 && customTimerOpen == false)  //Open up the sidebar
  {
    statisticsOpen = true;
    document.getElementById("get-statistics").style.left="0"
    document.getElementById("get-statistics").style.width="100%"
  }
  if(isOpen === 0)  //Close the sidebar
  {
    statisticsOpen = false;
    document.getElementById("get-statistics").style.left="-100%"
  }
}
