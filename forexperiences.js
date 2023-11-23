$(document).ready(function(){
    var zindex = 10;
    
    $("div.card").click(function(e){
      e.preventDefault();
  
      var isShowing = false;
  
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.cards").hasClass("showing")) {
        $("div.card.show")
          .removeClass("show");
  
        if (isShowing) {
          $("div.cards")
            .removeClass("showing");
        } else {
          $(this)
            .css({zIndex: zindex})
            .addClass("show");
  
        }
  
        zindex++;
  
      } else {
        $("div.cards")
          .addClass("showing");
        $(this)
          .css({zIndex:zindex})
          .addClass("show");
  
        zindex++;
      }
      
    });
  });

  function playClickSound() {
    
    var audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
    audio.play();
  }