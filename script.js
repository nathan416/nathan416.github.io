$(function () {
    var seconds = 00;
    var tens = 00;
    var $appendTens = $("#tens");
    var $appendSeconds = $("#seconds");
    var $buttonStart = $("#button-start");
    var $buttonStop = $("#button-stop");
    var $buttonReset = $("#button-reset");
    var interval;
    var animationInterval;

    $("#timer").addClass("timer-background");
    $("button").addClass("button-style");
    $(".button-style").css({
        border: "3px solid steelblue",
        color: "white",
        "background-color": "black",
        "border-radius": "10px",
        "padding-right": "10px",
        "padding-left": "10px",
        margin: "5px",
    });
    $(".button-style").mouseenter(function () {
        $(this).css({
            "background-color": "darkgrey",
        });
    });
    $(".button-style").mouseleave(function () {
        $(this).css({
            "background-color": "black",
        });
    });
    //can't use the :hover css in jquery without events

    $("html").css({
        "background-color": "lightcoral"
    });

    $(".wrapper").css({
        "background-color": "white",
        color: "white",
        "border-radius": "15px",
        padding: "10px",
        "box-shadow": "0 0 10px 2px",
        "max-width": "80%",
        "min-width": "60%",
        "background-image": 'url("spider-man-image.png")',
        // src: https://wall.alphacoders.com/by_sub_category.php?id=242242&name=Spider-Man+%28PS4%29+Wallpapers 
        "background-repeat": "no-repeat",
        "background-size": "cover"
    });

    $("body").css({
        "justify-content": "center",
        display: "flex",
        "align-items": "center",
        "flex-direction": "column",
        "font-family": "'Roboto', sans-serif"
    });

    $(".timer-background").css({
        border: "3px solid steelblue",
        "border-radius": "15px",
        padding: "10px",
        "background-color": "grey",
        color: "black"
    });

    $buttonStart.click(function () {
        clearInterval(interval);
        clearInterval(animationInterval);
        interval = setInterval(startTimer, 10);
        animationInterval = setInterval(opacityToggle, 2000);
        $(".timer-background").css("background-color", "lightgreen");
        
    });

    $buttonStop.click(function () {
        clearInterval(interval);
        clearInterval(animationInterval);
        if (tens == "00" && seconds == "00") {
            $(".timer-background").css("background-color", "grey");
        } else {
            $(".timer-background").css("background-color", "lightcoral");
        }
    });

    $buttonReset.click(function () {
        clearInterval(interval);
        clearInterval(animationInterval);
        tens = "00";
        seconds = "00";
        $appendTens.html(tens);
        $appendSeconds.html(seconds);
        $(".timer-background").css("background-color", "grey");
    });

    function opacityToggle() {
        $(".timer-background").animate(
            {
                opacity: 0.8,
            },
            1000
        );
        $(".timer-background").animate(
            {
                opacity: 1.0,
            },
            1000
        );
    }

    function startTimer() {
        tens++;

        if (tens < 9) {
            $appendTens.html("0" + tens);
        }

        if (tens > 9) {
            $appendTens.html(tens);
        }

        if (tens > 99) {
            console.log("seconds");
            seconds++;
            $appendSeconds.html("0" + seconds);
            tens = 0;
            $appendTens.html("0" + 0);
        }

        if (seconds > 9) {
            $appendSeconds.html(seconds);
        }
    }
});