function visible(){
    var menuSection = document.getElementsByClassName('menu-section');
    if (menuSection.length > 0) {
        menuSection[0].style.display = "flex";
      }
      var menuIcon = document.getElementsByClassName('menu-icon');
      menuIcon[0].style.display = "none";
      let crossIcon=document.getElementsByClassName('cross-icon');
      crossIcon[0].style.display = "flex";
}   
function invisible(){
    var menuSection = document.getElementsByClassName('menu-section');
    if (menuSection.length > 0) {
        menuSection[0].style.display = "none";
      }
      var menuIcon = document.getElementsByClassName('menu-icon');
      menuIcon[0].style.display = "flex";
      let crossIcon=document.getElementsByClassName('cross-icon');
      crossIcon[0].style.display = "none";
}