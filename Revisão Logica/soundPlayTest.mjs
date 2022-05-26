var player = require('play-sound')(opts = {})

 player.play('./music/somebody20.flac', function (err) {
   if (err) throw err;
   console.log("Audio finished");
 });