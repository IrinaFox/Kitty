'use strict';

function Kitty () {
    var empty = false;

    this.on = function (condition, callback) {

    };

    this.eatFish = function () {
        empty = false;
        //function
    };

    this.run = function () {
        empty = true;
        //function
    };

    return this;
}