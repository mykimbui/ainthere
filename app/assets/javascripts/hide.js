var cities = document.querySelectorAll('.city-name');

cities.forEach(function(city){
  city.addEventListener('click',function(){
    // document.getElementById("marque").classList.toggle("hidden");
    // console.log(element.id)
    var photos = document.querySelectorAll('.' + city.id);

    photos.forEach(function(photo){
      console.log(photo)
      photo.parentNode.classList.toggle("hidden");
    });
  });
});


// for (var i = 0, total = city.length; i < total; i++) {
//   (function(index){
//     city[i].onclick = function(){
//       alert(index)  ;
//     }
//   })(i);
// }


// for (var i = 0, total = city.length; i < total; i++) {
//   (function(index){
//     city[i].onclick = function(){
//       document.getElementById("marque").classList.toggle("hidden");

//       photo.forEach(function(element){
//         element.classList.toggle("hidden");
//       });
//       console.log(index);
//     }
//   })(i);
// }










