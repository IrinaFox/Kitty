'use strict';

function Kitty () {
    var empty = 5,
        listeners = {
          empty: []
        };

    this.on = function (eventName, callback) {
        if (!listeners.hasOwnProperty(eventName)) {
            listeners[eventName] = [];
        }

        listeners[eventName].push(callback);
    };

    this.eatFish = function () {
        console.log('eating');

        empty += 3;
    };

    this.run = function () {
        console.log('running');

        empty --;

        if (empty <= 0) {
            triggerEvent('empty');
        }
    };

    function triggerEvent (eventName) {
        if (listeners.hasOwnProperty(eventName)) {
            listeners[eventName].forEach(function (callback) {
                callback();
            });
        }
    }

    return this;
}