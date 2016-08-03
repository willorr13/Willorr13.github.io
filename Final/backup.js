$(document).ready(function() {
  //Scrolly Effect Stuff
  $(window).scroll(function(w) {
    var image = $('');
    var nav = $('header');\
    console.log()
  };

    w = $(this);
    if(w.scrollTop() > 420){ //if da scroll topz is greater than 420px
      image.removeClass('hide').addClass('slide-left-to-right'); //slide it
    }
    if(w.scrollTop() > 80){ //if da scroll topz is greater than 80px
      nav.addClass('sticky-header'); //stick dat header
    }else if(w.scrollTop() == 0){ //or like idk
      nav.removeClass('sticky-header'); //remove it
    }
    if(w.scrollTop() > 1480){
      $('#video-sidebar > span').addClass('slide-down')
      .css('display','block');
    }
  });
