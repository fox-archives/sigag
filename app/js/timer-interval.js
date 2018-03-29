

function customInterval (workDuration, shortBreakDuration, longBreakDuration, longBreakInterval) {
    document.getElementById("work-duration").value = workDuration;
    document.getElementById("short-break-duration").value = shortBreakDuration;
    document.getElementById("long-break-duration").value = longBreakDuration;
    document.getElementById("long-break-interval").value = longBreakInterval;
}

function startChangeSliderText(sliderNumber) {

    if(sliderNumber == 1) {
        document.getElementById("work-duration-text").innerHTML = document.getElementById("work-duration").value;
    }
}
