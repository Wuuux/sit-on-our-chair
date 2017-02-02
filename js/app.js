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
var sliderPosition = 0;
$('.leftSliderButton').on('click',function(){
  console.log('left');
  sliderPosition += 1064;
  if (sliderPosition > 0) sliderPosition = -2128;
  $('.frameSlider').css('left',sliderPosition+'px');
});
$('.rightSliderButton').on('click',function(){
  console.log('right');
  sliderPosition -= 1064;
  if (sliderPosition < -2128) sliderPosition = 0;
  $('.frameSlider').css('left',sliderPosition+'px');
});


});
