/**
 * Created by faller222 on 9/8/2016.
 */

$(document).ready(function () {
    showCountDown();
    startTime();
});

function startTime() {
    var intervalID = setInterval(function () {
        showCountDown();
    }, 1000);
}

function showCountDown() {
    var today = new Date();
    var dd = 365 - dayOfYear(today);
    var hh = 24 - today.getHours();
    var min = 60 - today.getMinutes();
    var sec = 60 - today.getSeconds();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (sec < 10) {
        sec = '0' + sec
    }

    if (min < 10) {
        min = '0' + min
    }

    if (hh < 10) {
        hh = '0' + hh
    }

    $("#days").html(dd);
    $("#hours").html(hh);
    $("#minutes").html(min);
    $("#seconds").html(sec);
}

var dayOfYear = function (date) {
    var start = new Date(date.getFullYear(), 0, 0);
    var diff = date - start;
    var oneDay = 1000 * 60 * 60 * 24;
    return Math.floor(diff / oneDay);
}