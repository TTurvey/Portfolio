$(function () {

  var loop_text = [' β·οΈ', ' πΆ', ' πΊοΈ',' π₯', ' π₯', ' πΈ', ' π', ' ποΈββοΈππββοΈ', ' π₯', ' π', ' π§Ύ', ' ποΈ', ' πΎ']
  var counter = 0; 
  var max = loop_text.length;
  var fadeOutTime = 1000
  var fadeInTime = 1000
  var intervalTime = fadeOutTime + fadeInTime

  setInterval(function () { 
    if (counter < max) {
      $("#intro_emoji").fadeOut(fadeOutTime, function () { 
        $(this).text(loop_text[counter]).fadeIn(fadeInTime); 
      }); 
      counter++;
      if (counter > max) {
        counter = 0
      };
    }
  }, intervalTime); 

  // setInterval(function () { 
  //   var index = Math.floor(Math.random() * (loop_text.length));
  //     $("#intro_emoji").fadeOut(1000, function () { 
  //       $(this).text(loop_text[index]).fadeIn(1000); 
  //     }); 
  // }, 1000); 
  
  // var rate = 5000
  // var text = function() {
  //   if (counter <= max) {
  //     $("#intro_emoji").text(loop_text[counter]);
  //     setTimeout(text, rate -= 50);
  //     counter +=1
  //   }
  // }

  // text();
}); 
