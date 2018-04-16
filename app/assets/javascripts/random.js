window.onLoad = Prep();


function Prep(){
  var images = document.querySelectorAll('.photo');

  window_Height = window.innerHeight;
  window_Width = window.innerWidth;
  for (var i = 0; i < images.length; i++) {
    console.log(images[i]);
    image_Element = images[i];
  };
  image_Height = image_Element.clientHeight;
  image_Width = image_Element.clientWidth;

  availSpace_V = window_Height - image_Height;
  availSpace_H = window_Width - image_Width;

  var changeInterval = 3000;
  setInterval(moveImage, changeInterval);
}

function moveImage(){
  var randNum_V = Math.round(Math.random() * availSpace_V);
  var randNum_H = Math.round(Math.random() * availSpace_H);

  image_Element.style.top = randNum_V + "px";
  image_Element.style.left = randNum_H + "px";
}




// ;(function(window,document,undefined){
//     "use strict";
//         var init = function(){
//             var canvas = document.querySelector('body');
//             var template = document.querySelector('#template');
//             var width = 330;
//             var height = 500;
//             var images = document.querySelectorAll('.photo');
//             var pickRandomImage = function(){
// var i = Math.floor( Math.random() * images.length );
//return images[i];
//             };
//             var total_number_of_images = images.length;
//             var max_height = canvas.offsetHeight - height;
//             var max_width = canvas.offsetWidth - width;
//             var randomCoordinate = function(){
//var r = [];
//var x = Math.floor( Math.random() * max_width );
//var y = Math.floor( Math.random() * max_height );
//r = [x,y];
//return r;
//             };
//             var createImage = function(){
//var node = template.cloneNode(true);
//var xy = randomCoordinate();
//node.removeAttribute('id');
//// node.removeAttribute('hidden');
//node.style.top = xy[1] + 'px';
//node.style.left = xy[0] + 'px';
//node.setAttribute('src',pickRandomImage());
//canvas.appendChild(node);
//             };
//             for (var i=0;i<total_number_of_images;i++){
//createImage();
//             };
//         };
//        window.addEventListener('load',init);
// })(window,document);

