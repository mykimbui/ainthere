document.addEventListener("DOMContentLoaded", function(event) {

function prep(images){

  var cities = document.querySelectorAll('.eachcity');
  var images = document.querySelectorAll('.photo');

  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;

  for (var i = 0; i < images.length; i++) {
    // console.log(images[i]);
    const imageElement = images[i];
    const imageHeight = imageElement.clientHeight;
    const imageWidth = imageElement.clientWidth;

    const availSpaceV = windowHeight - imageHeight;
    const availSpaceH = windowWidth - imageWidth;
  };

  var changeInterval = 3000;
  setInterval(moveImage, changeInterval);
}

function moveImage(){
  var randNumV = Math.round(Math.random() * availSpaceV);
  var randNumH = Math.round(Math.random() * availSpaceH);

  imageElement.style.top = randNumV + "px";
  imageElement.style.left = randNumH + "px";
}

});
