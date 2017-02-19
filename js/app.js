$(function() {


  $('.submenu').on('mouseenter',function(){
    console.log('enter');
    $(this).children().show();
  });
  $('.submenu').on('mouseleave',function(){
    console.log('leave');
    $(this).children().fadeOut(1000);
  });


  $('.galleryItem').on('mouseenter',function(){
    $(this).children().hide();
  });
  $('.galleryItem').on('mouseleave',function(){
    $(this).children().show();
  });

  var sliderPosition = 1;

  $('.leftSliderButton').on('click',function(){

              if (sliderPosition == 1) {
                $( ".frameSlider" ).animate({
                  left: "+=1064"
                }, 1000, function() {
                });
                $( ".frameSlider" ).animate({
                  left: "-3192"
                }, 0, function() {
                });
                sliderPosition = 3;
              } else {
                sliderPosition -= 1;
                $( ".frameSlider" ).animate({
                  left: "+=1064"
                }, 1000, function() {
                });
              };
  });

  $('.rightSliderButton').on('click',function(){

              if (sliderPosition == 3) {
                $( ".frameSlider" ).animate({
                  left: "-=1064"
                }, 1000, function() {
                });

                $( ".frameSlider" ).animate({
                  left: "-1064"
                }, 0, function() {
                });
                sliderPosition = 1;

              } else {
                sliderPosition += 1;
                $( ".frameSlider" ).animate({
                  left: "-=1064"
                }, 1000, function() {
                });
              };
  });


  jQuery.fn.rotate = function(degrees) {
      $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                   '-moz-transform' : 'rotate('+ degrees +'deg)',
                   '-ms-transform' : 'rotate('+ degrees +'deg)',
                   'transform' : 'rotate('+ degrees +'deg)'});
      return $(this);
  };

  $('.list_arrow').on('click',function(){
      $(this).next().toggle();
      var rotate = $(this).data('rotation');
        if (rotate == 0) {
          rotate = 180;
          $(this).data('rotation',180);
        } else {
          rotate = 0;
          $(this).data('rotation', 0);
        }
      $(this).rotate(rotate);
  });

$('.list_panel li').on('click',function(){
  console.log($(this).text());
  var text = $(this).text();
  var $chair = $('.panel_left h4.title');
  var $valueChair = $('.panel_right h4.value');
  var $color = $('.panel_left span.color');
  var $valueColor = $('.panel_right span.color.value');
  var $pattern = $(' .panel_left span.pattern');
  var $valuePattern = $('.panel_right span.pattern.value');

  switch(text) {
    case 'Chair Clair':
          $chair.text(text);
          $valueChair.text($(this).data('price'));
          $('.image_part img').attr('src','images/blackchair.png')
        break;
    case 'Chair Margarita':
          $chair.text(text);
          $valueChair.text($(this).data('price'));
          $('.image_part img').attr('src','images/orangechair.png')
        break;
    case 'Chair Selena':
          $chair.text(text);
          $valueChair.text($(this).data('price'));
          $('.image_part img').attr('src','images/red_chair.png')
        break;
    case 'Czerwony':
          $color.text(text);
          $valueColor.text($(this).data('price'));
        break;
    case 'Czarny':
          $color.text(text);
          $valueColor.text($(this).data('price'));
        break;
    case 'Pomarańczowy':
          $color.text(text);
          $valueColor.text($(this).data('price'));
        break;
    case 'Tkanina':
          $pattern.text(text);
          $valuePattern.text($(this).data('price'));
        break;
    case 'Skóra':
          $pattern.text(text);
          $valuePattern.text($(this).data('price'));
        break;
    };

    $('.sum strong').text(''+ sum());
  });

  $('#transport').on('click',function(){
    var $transport = $(' .panel_left span.transport');
    var $valueTransport = $('.panel_right span.transport.value');
    var transportCheck = $(this).prop('checked');
    if (transportCheck == true) {
      $transport.text('transport');
      $valueTransport.text($(this).data('transportPrice'));
    } else {
      $transport.text('');
      $valueTransport.text('');
    };
    $('.sum strong').text(sum());
  });

  function sum(){
    var chairPrice      = $('.panel_right h4.title.value').text();
      if (chairPrice == '') {
        chairPrice = 0;
      } else {
        chairPrice = parseInt(chairPrice);
      };

    var colorPrice      = $('.panel_right span.color.value').text();
      if (colorPrice == '') {
        colorPrice = 0;
      } else {
        colorPrice = parseInt(colorPrice);
      };

    var patternPrice    = $('.panel_right span.pattern.value').text();
      if (patternPrice == '') {
        patternPrice = 0;
      } else {
        patternPrice = parseInt(patternPrice);
      };

    var transportPrice  = $('.panel_right span.transport.value').text();
      if (transportPrice == '') {
        transportPrice = 0;
      } else {
        transportPrice = parseInt(transportPrice);
      };

    return chairPrice + colorPrice + patternPrice + transportPrice;
  };
  
  $('div.agreement').on('click', function(){
    $(this).find('img').toggle();
  });

});
