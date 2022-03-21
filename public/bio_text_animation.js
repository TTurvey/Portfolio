$(function () {

  var loop_text = ['a skier ⛷️', 'a music lover 🎶', 'an explorer 🗺️','an optimist 🥛', 'a film fan 🎥', 'a concertgoer 🎸', 'a melophile 🔊', 'a crossfitter 🏋️‍♂️🏃🏊‍♂️', 'a drummer 🥁', 'an ex-auditor 🔎', 'an ex-accountant 🧾', 'a cynophile 🐾', 'a cinephile 🎞️', 'a dog lover 🐕', 'SOFTWARE DEVELOPER']
  var counter = 0; 
  var max = loop_text.length;
  // var fadeOutTime = 100
  // var fadeInTime = 100
  // var intervalTime = fadeOutTime + fadeInTime

  // setInterval(function () { 
  //   if (counter < max) {
  //     $("#intro_text").fadeOut(fadeOutTime, function () { 
  //       $(this).text(counter).fadeIn(fadeInTime); 
  //     }); 
  //     counter +=1
  //   }
  // }, intervalTime); 
  
  var rate = 1000
  var text = function() {
    if (counter <= max) {
      $("#intro_text").text(loop_text[counter]);
      setTimeout(text, rate -= 50);
      counter +=1
    }
  }

  text();


}); 
