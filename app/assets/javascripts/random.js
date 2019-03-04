// window.onLoad = Prep();
// const citiesName = document.querySelectorAll('.city-name');
// const images = document.querySelectorAll('.data-images');

// city.forEach(function(element){
//   element.addEventListener('click',function(){
//     // document.getElementById("marque").classList.toggle("hidden");
//     // const images = this.querySelectorAll('.photo');
//     images.forEach(function(element){
//       element.classList.toggle("hidden");
//     });
//   });
// });
// citiesName.forEach(function(city) {
//   const imagesList = document.querySelector(".data-images")
//   city.addEventListener('click', function(event) {
//     event.preventDefault()
//     prep(imagesList)
//   })
// })

function prep(images){

  var cities = document.querySelectorAll('.eachcity');
  var images = document.querySelectorAll('.photo');

  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;

  for (var i = 0; i < images.length; i++) {
    console.log(images[i]);
    const imageElement = images[i];
  };

  imageHeight = imageElement.clientHeight;
  imageWidth = imageElement.clientWidth;

  availSpaceV = windowHeight - imageHeight;
  availSpaceH = windowWidth - imageWidth;

  var changeInterval = 3000;
  setInterval(moveImage, changeInterval);
}

function moveImage(){
  var randNumV = Math.round(Math.random() * availSpaceV);
  var randNumH = Math.round(Math.random() * availSpaceH);

  imageElement.style.top = randNumV + "px";
  imageElement.style.left = randNumH + "px";
}


