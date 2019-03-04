document.addEventListener("DOMContentLoaded", function(event) {

  var imgs = document.querySelectorAll('.photo');

  TweenLite.set("#container",{perspective:600})
  TweenLite.set("img",{xPercent:"-50%",yPercent:"-50%"})

  var total = imgs.length;
  var container = document.getElementById("container"), w = window.innerWidth , h = window.innerHeight;

  for (i=0; i<total; i++){
    var n = imgs[i];
    TweenLite.set(n,{attr:{class:'dot hidden'},x:R(0,w),y:R(-200,-150),z:R(-200,200)});
    container.appendChild(n);
    drop(n);
  }

  function drop(e){

    var a = TweenMax.to(e,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
    // var b = TweenMax.to(e,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    var c = TweenMax.to(e,R(2,8),{rotationX:R(0,180),rotationY:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});

    e.addEventListener('mouseenter', function() {
      a.pause();
      // b.pause();
      c.pause();
    });

    e.addEventListener('mouseleave', function() {
      a.play();
      // b.play();
      c.play();
    });

    e.addEventListener('click', function() {
      this.classList.add("hidden");
    });

  };

  function R(min,max) {return min+Math.random()*(max-min)};

  // TweenMax.to(e,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});

});
