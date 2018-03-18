function toggleSideNavigation(isOpen) {
    if(isOpen === 1) //Open the sidebar
    {
        document.getElementById("change-interval-sidebar").style.width="100%"
        document.getElementById("change-interval-sidebar").style.left="0"
    }
    if(isOpen === 0) //Open the sidebar
    {
        document.getElementById("change-interval-sidebar").style.width="400px"
        document.getElementById("change-interval-sidebar").style.left="-400px"

    }
}
