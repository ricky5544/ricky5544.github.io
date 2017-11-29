
function init() {
    resetShips();
}

/* This line gets all the HTML elements with class="light" and assigns them to a variable called LIGHTS. */
var LIGHTS = document.getElementsByClassName("light");

/* This defines a function which turns off every light by removing the "on" class from the HTML elements.*/
function allOff() {
    for (var i = 0; i < LIGHTS.length; i = i + 1) {
        LIGHTS[i].classList.remove("on");
    }
}

/* This defines a function which first turns off every light and then immediately turns one on.*/
function switchLight(lightNumber) {
    allOff();
    var light = LIGHTS[lightNumber];
    light.classList.add("on");

    if (lightNumber == 0)
        stop();


    if (lightNumber != 0)
        setup();

}

var animate, left = 0, imgObj = null, imgObj2 = null;

function setup() {

    imgObj = document.getElementById('spaceship');
    imgObj2 = document.getElementById('spaceship2');
    imgObj.style.position = 'absolute';
    imgObj.style.bottom = '240px';
    imgObj.style.left = '-300px';
    imgObj2.style.position = 'absolute';
    imgObj2.style.bottom = '450px';
    imgObj2.style.left = '-300px';

    moveRight();
}

function moveRight() {

    var firstImageMovement = Math.round((Math.random() * 40) + 50);
    var secondImageMovement = Math.round((Math.random() * 40) + 50);

    left = parseInt(imgObj.style.left, 10);
    left2 = parseInt(imgObj2.style.left, 10);

    if (1300 >= left && 1300 >= left2) {
        imgObj.style.left = (left + firstImageMovement) + 'px';
        imgObj.style.visibility = 'visible';
        imgObj2.style.left = (left + secondImageMovement) + 'px';
        imgObj2.style.visibility = 'visible';

        animate = setTimeout(function () { moveRight(); }, 300); // call moveRight in 20msec



        //stopanimate = setTimeout(moveRight,20);
    }

    else if (imgObj.style.left > imgObj2.style.left) {
        var spaceship1Show = document.getElementById("spaceship1_Win");
        spaceship1Show.style.display = "block";
    }

    else if (imgObj2.style.left > imgObj.style.left) {
        var spaceship2Show = document.getElementById("spaceship2_Win");
        spaceship2Show.style.display = "block";
    }

    //else {
    //    stop();
    //}
}

function stop() {
    clearTimeout(animate);
    resetShips();


}

function resetShips() {
    imgObj = document.getElementById('spaceship');
    imgObj2 = document.getElementById('spaceship2');
    imgObj.style.position = 'absolute';
    imgObj.style.bottom = '240px';
    imgObj.style.left = '-200px';
    imgObj2.style.position = 'absolute';
    imgObj2.style.bottom = '450px';
    imgObj2.style.left = '-200px';

    var spaceship1Show = document.getElementById("spaceship1_Win");
    spaceship1Show.style.display = "none";

    var spaceship2Show = document.getElementById("spaceship2_Win");
    spaceship2Show.style.display = "none";
}

window.onload = function () { init(); };