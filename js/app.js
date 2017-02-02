$(function() {


//   var submenuHidden = true;
//   function showSubmenu(){
//     // divId.innerHTML = this.dataset.text;
//     console.log('klik');
//     var submenu = document.getElementById('submenu');
//     if (submenuHidden == true) {
//       submenu.style.visibility = 'visible';
//       submenuHidden = false;
//     } else {
//       submenu.style.visibility = 'hidden';
//       submenuHidden = true;
//     }
//   };
//   function slideSubmenu(){
//     // divId.innerHTML = this.dataset.text;
//     console.log('click1');
//   };
//
// var navLink= document.getElementsByTagName('li');
// // navLink[0].addEventListener('onmouseenter',klik1);
// navLink[0].addEventListener('click',slideSubmenu);

$('.galleryItem').on('mouseenter',function(){
  console.log('click');
  $(this).children().hide();
});
$('.galleryItem').on('mouseleave',function(){
  console.log('click');
  $(this).children().show();
});

var sliderPosition = 1;
$('.leftSliderButton').on('click',function(){
  console.log('left');

  // if (sliderPosition > 0) sliderPosition = -2128;
  // $('.frameSlider').css('left',sliderPosition+'px');
  if (sliderPosition == 1) {
    $( ".frameSlider" ).animate({
      left: "+=1064"
    }, 1000, function() {
      // Animation complete.

    });
    $( ".frameSlider" ).animate({
      left: "-3192"
    }, 0, function() {
      // Animation complete.
    });
    sliderPosition = 4;
  } else {
    sliderPosition -= 1;
    $( ".frameSlider" ).animate({
      left: "+=1064"
    }, 1000, function() {
      // Animation complete.
    });
  };
  console.log('left',sliderPosition);
});

$('.rightSliderButton').on('click',function(){
  console.log('right');
  sliderPosition += 1;
  // if (sliderPosition < -2128) sliderPosition = 0;
  // $('.frameSlider').css('left',sliderPosition+'px');
  if (sliderPosition == 4) {
    $( ".frameSlider" ).animate({
      left: "-=1064"
    }, 1000, function() {
      // Animation complete.

    });
    // $('.frameSlider').css('left',-1064*sliderPosition +'px');
    $( ".frameSlider" ).animate({
      left: "-1064"
    }, 0, function() {
      // Animation complete.
    });
    console.log($('.frameSlider'))
    sliderPosition = 1;
  } else {
    $( ".frameSlider" ).animate({
      left: "-=1064"
    }, 1000, function() {
      // Animation complete.
    });
  };
  // $( ".frameSlider" ).animate({
  //   left: "-=1064"
  // }, 1000, function() {
  //   // Animation complete.
  // });
  console.log('right',sliderPosition);
});


});
