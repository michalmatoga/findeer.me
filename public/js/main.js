var clock = $("#countdown").FlipClock();
var start = parseInt(new Date().getTime() / 1000), stop = parseInt(new Date(2015,3,3,17).getTime() / 1000);
clock.setTime(stop - start);
clock.setCountdown(true);
clock.start();
