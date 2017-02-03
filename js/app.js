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
              console.log('left',sliderPosition);
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
                console.log($('.frameSlider'))
                sliderPosition = 1;

              } else {
                sliderPosition += 1;
                $( ".frameSlider" ).animate({
                  left: "-=1064"
                }, 1000, function() {
                });
              };
              console.log('right',sliderPosition);
  });


});
