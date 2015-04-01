var clock = $("#countdown").FlipClock({
    "countdown": true,
});
var start = new Date().getTime() / 1000, stop = new Date("2015-04-03 17:00:00").getTime() / 1000;

clock.setTime(stop - start);
clock.start();
