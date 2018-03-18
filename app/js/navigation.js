function toggleSideNavigation(isOpen) {
    if(isOpen === 1) //Open the sidebar
    {
        document.getElementById("change-interval-sidebar").style.width="100%"
    }
    if(isOpen === 0) //Open the sidebar
    {
        document.getElementById("change-interval-sidebar").style.width="0%"
    }
}
