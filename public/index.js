$(function () {

  var intro_words = ['a skier ⛷️', 'a music lover 🎶', 'an optimist 🥛', , 'a film fan 🎥', 'a cinephile 🎞️', 'a concertgoer 🎸', , 'a melophile 🔊', 'a crossfitter 🏋️‍♂️🏃🏊‍♂️', 'a drummer 🥁', 'an ex-auditor 🔎', 'an ex-accountant 🧾', 'a cynophile 🐾', 'a dog lover 🐕', 'an explorer 🗺️']
  var counter = 0; 
  var elem = $("#intro_text");
  
  setInterval(function () { 
    var index = Math.floor(Math.random() * (intro_words.length));
      $("#intro_text").fadeOut(2000, function () { 
        $(this).text(intro_words[index]).fadeIn(2000); 
      }); 
  }, 1000); 
      
}); 
