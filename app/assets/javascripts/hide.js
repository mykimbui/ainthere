var photo = document.querySelectorAll('.photo');
var city = document.querySelectorAll('.city-name');

city.forEach(function(element){
  element.addEventListener('click',function(){
    document.getElementById("marque").classList.toggle("hidden");
    photo.forEach(function(element){
        element.classList.toggle("hidden");
    });
    console.log("yo");
  });
});



// function myFunction() {
//     document.getElementById("marque").classList.remove("hidden");
// }
