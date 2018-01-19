"usestrict";

let card = document.getElementById('card');

console.log(card);

console.log(card.scrollLeft);


card.addEventListener('mousemove', function(e) {

  var windowOffsetX = this.getBoundingClientRect().left;
  var windowOffsetY = this.getBoundingClientRect().top;

  var mX = e.clientX - windowOffsetX;
  var mY = e.clientY - windowOffsetY;

  var relPosX =( mX / this.offsetWidth - 0.5)*-1;
  var relPosY = (mY / this.offsetHeight - 0.5);

  this.style.transform = "rotate3d(" + relPosY + "," + relPosX + ", 0, 10deg)";

  console.log(relPosX);


  // console.log(relPosX);
});

card.addEventListener("mouseout", function() {
  this.style.transform = "rotate3d(" + 0 + "," + 0 + ", 0, 0deg)";
});
