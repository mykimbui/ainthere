var photo = document.querySelectorAll('.photo');
var city = document.querySelectorAll('.city-name');

city.forEach(function(element){
  element.addEventListener('click',function(){
    // document.getElementById("marque").classList.toggle("hidden");
    photo.forEach(function(element){
      element.classList.toggle("hidden");
    });
    console.log("yo");
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










