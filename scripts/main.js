'use strict';

window.addEventListener('load', function () {
    var lavrentiy = new Kitty();

    lavrentiy.on('empty', function () {
       console.log('Meow-Meow-Meow give me food, my slave!')
    });

    lavrentiy.on('full', function () {
        console.log('Mrrr I\'m happy!')
    });

    lavrentiy.run();
    lavrentiy.run();
    lavrentiy.run();
    lavrentiy.run();
    lavrentiy.run();
    lavrentiy.run();
    lavrentiy.run();

    lavrentiy.eatFish();

}, false);
