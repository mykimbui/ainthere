var city = document.querySelectorAll('.city-name');
var pic = document.querySelectorAll('.hovering');

city.forEach(function(element){
  element.addEventListener('mouseover',function(element){
    // console.log("im hoverin");
    element.target.style.color = "red";
    pic.forEach(function(element){
      element.classList.remove("hidden");
    });
    setTimeout(function() {
      element.target.style.color = "";
    }, 500);
  }, false);
  element.addEventListener('mouseleave',function(element){
    pic.forEach(function(element){
      element.classList.add("hidden");
    });
  }, false);
});
