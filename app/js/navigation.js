function toggleSideNavigation(isOpen) {
    if(isOpen === 1) //Open the sidebar
    {
        document.getElementById("change-interval-sidebar").style.left="0"
        document.getElementById("change-interval-sidebar").style.width="100%"
    }
    if(isOpen === 0) //Close the sidebar
    {
        document.getElementById("change-interval-sidebar").style.left="-100%"
    }
}
