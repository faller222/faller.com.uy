$(document).ready(function () {
    showTIme();
    startTime();
});

function startTime() {
    var intervalID = setInterval(function () {
        showTIme();
    }, 30000);
}

function showTIme() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var hh = today.getHours();
    var min = today.getMinutes();

    if (dd < 10) {
        dd = '0' + dd
    }

    if (mm < 10) {
        mm = '0' + mm
    }

    if (min < 10) {
        min = '0' + min
    }

    if (hh < 10) {
        hh = '0' + hh
    }


    today = dd + '/' + mm + '/' + yyyy + ' - ' + hh + ':' + min;
    $("#timeer").html(today);
}