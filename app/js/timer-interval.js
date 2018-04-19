function updateAllIntervalComponents(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
    changeSliderText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
    changeSliderPosition(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
    changeCustomIntervalText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval);
}

function updateOnSliderOnMove(sliderNumber) {
    /* 0 for Work Duration
     * 1 for Short Break Duration
     * 2 for Long Break Duration
     * 3 for Long Break Interval
     */

    if(sliderNumber == 0)
    {
        document.getElementById("work-duration-text").innerHTML = document.getElementById("work-duration").value;
        document.getElementById("custom-interval-work").innerHTML = document.getElementById("work-duration").value;
    }
    if(sliderNumber == 1)
    {
        document.getElementById("short-break-duration-text").innerHTML = document.getElementById("short-break-duration").value;
        document.getElementById("custom-interval-break").innerHTML = document.getElementById("short-break-duration").value;
    }
    if(sliderNumber == 2)
    {
        document.getElementById("long-break-duration-text").innerHTML = document.getElementById("long-break-duration").value;
    }
    if(sliderNumber == 3)
    {
        document.getElementById("long-break-interval-text").innerHTML = Math.round(document.getElementById("long-break-interval").value/10);
    }
}

function changeSliderText (workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
    //Change text left of slider
    document.getElementById("work-duration-text").innerHTML = workDuration;
    document.getElementById("short-break-duration-text").innerHTML = shortBreakDuration;
    document.getElementById("long-break-duration-text").innerHTML = longBreakDuration;
    document.getElementById("long-break-interval-text").innerHTML = longBreakInterval;
}

function changeSliderPosition(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
    //Change Slider Position (values)
    document.getElementById("work-duration").value = workDuration;
    document.getElementById("short-break-duration").value = shortBreakDuration;
    document.getElementById("long-break-duration").value = longBreakDuration;
    document.getElementById("long-break-interval").value = longBreakInterval*10;
}

function changeCustomIntervalText(workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
    document.getElementById("custom-interval-work").innerHTML = workDuration;
    document.getElementById("custom-interval-break").innerHTML = shortBreakDuration;
}
