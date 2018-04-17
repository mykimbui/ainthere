// var falling = true;
var imgs = document.querySelectorAll('.photo');

TweenLite.set("#container",{perspective:600})
TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

var total = imgs.length;
var container = document.getElementById("container"), w = window.innerWidth , h = window.innerHeight;

for (i=0; i<total; i++){
  var n = imgs[i];
  // var newimg = document.createElement('div');
  TweenLite.set(n,{attr:{class:'dot hidden'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
  container.appendChild(n);
  animm(n);
}

function animm(e){
 TweenMax.to(e,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
 TweenMax.to(e,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
 TweenMax.to(e,R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
};

function R(min,max) {return min+Math.random()*(max-min)};


// TweenMax.to(".photo",R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
// TweenMax.to(".photo",R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
// TweenMax.to(".photo",R(2,8),{rotationX:R(0,360),rotationY:R(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});

// for (i=0; i<total; i++){
//   var imgnew = imgs[i];
//   // TweenLite.set(imgnew,{attr:{class:'dot'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
//   TweenMax.to(imgnew, R(6,20), {y: h+100, ease: Linear.easeNone, repeat: -1, delay: -25});
//   TweenMax.to(imgnew, R(4,5), {x:'+=200', rotationZ: R(0,180), repeat: -1, yoyo: true, ease: Sine.easeInOut}, {timeScale:0.1});
//   TweenMax.to(imgnew, R(2,5), {rotationX: R(0,360), rotationY: R(0,360), repeat: -1,yoyo: true, ease: Sine.easeInOut, delay: -35}, {timeScale:0.1});
// }
// function R(min,max) {return min+Math.random()*(max-min)};
