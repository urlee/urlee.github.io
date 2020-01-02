var time = 13;
var countdown = function (ne) {
    "use strict";
    var now = new Date();
    var diff = ne.getTime() - now.getTime();
    var s = Math.floor(diff / 1000 % 60);
    var m = Math.floor(diff / 1000 / 60) % 60;
    var h = Math.floor(diff / 1000 / 60 / 60) % 24;
    var d = Math.floor(diff / 1000 / 60 / 60 / 24);
    var count = [d, h, m, s];

    return count;
};

var switchingtime = new Date();
switchingtime.setHours(24 + time);
switchingtime.setMinutes(1);
switchingtime.setSeconds(0);

var re = function () {
    "use strict";
    var count = countdown(switchingtime);
    var time = count[1] + '時間' + count[2] + '分';
    document.getElementById('count').textContent = time;


    if (counter[1]+counter[2] === 0){
        var time_h = '24時間' + counter[2] + '分';
        document.getElementById('count').textContent = time_h;
    }

    setTimeout(re, 1000);
};

re();
