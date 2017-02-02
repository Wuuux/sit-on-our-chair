document.addEventListener("DOMContentLoaded", function(){


  // var buttons = document.getElementsByTagName('button');
  // var divId = document.getElementById('id1');
  //
  // for(var i=0;i<buttons.length;i++){
  //   console.log(buttons[i]);
  //   buttons[i].addEventListener('click',klik)
  // }
  var submenuHidden = true;
  function showSubmenu(){
    // divId.innerHTML = this.dataset.text;
    console.log('klik');
    var submenu = document.getElementById('submenu');
    if (submenuHidden == true) {
      submenu.style.visibility = 'visible';
      submenuHidden = false;
    } else {
      submenu.style.visibility = 'hidden';
      submenuHidden = true;
    }
  };
  function slideSubmenu(){
    // divId.innerHTML = this.dataset.text;
    console.log('click1');
  };

var navLink= document.getElementsByTagName('li');
navLink[0].addEventListener('onmouseenter',klik1);
navLink[0].addEventListener('click',slideSubmenu);



});
