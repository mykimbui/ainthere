var cities = document.querySelectorAll('.city-name')

cities.forEach(function(city){
  city.addEventListener('click',function(){
    var photos = document.querySelectorAll('.' + city.id)

    photos.forEach(function(photo){
      photo.parentNode.classList.toggle('hidden')
    })
  })
})

function switchCity(city, photo) {

  var photos = document.querySelectorAll('photo');
  var i;
  for (i = 0; i < x.length; i++) {
    photos[i].style.display = 'none';
  }

  document.getElementById(photo).style.display = 'block';

  // now we get all tab menu items by class names (use the next code only if you need to highlight current tab)
  // var x = document.getElementsByClassName("tabmenu");
  // var i;
  // for (i = 0; i < x.length; i++) {
  //   x[i].className = 'tabmenu';
  // }
  // document.getElementById(rudr_tab_id).className = 'tabmenu active';
}
