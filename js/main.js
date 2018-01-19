"usestrict";

let hello = "Hello World";

let card = document.getElementsByClassName('card');
// console.log(card);

let getMousePos;

let s = card[0].style;
s.transition = "all 0.2s ease-in-out";
// console.log(s);

function removeEventListeners(item) {
  // item.removeEventListener('mouseenter', function(item){}, true);
  // item.removeEventListener('mousemove', mouseRelativePosition, true);
  // item.removeEventListener('mouseleave', removeEventListeners(), true);
}

function mouseRelativePosition(e) {

  let ect = e.currentTarget;

  let posX = e.pageX - ect.getBoundingClientRect().left;
  let posY = e.pageY - ect.getBoundingClientRect().top;

  let tiltMatrix3d = [];
/*
  if (e.type == "mouseleave") {
    tiltMatrix = [
    // X | Y
      1, 0, //scaleX | skewY
      0, 1, //skewX | scaleY
      0, 0 //translateX, translateY
    ];
  } else {
    tiltMatrix = [
    // X | Y
      1, -0.3,
      0, 1,
      0, 0
    ];
  }
*/
  tiltMatrix3d = [
    1,1,1,1,
    1,1,1,1,
    1,1,1,1,
    1,1,1,1
  ];

  console.log(e);

  // ect.style.transform = "matrix("+tiltMatrix+")";
  ect.style.transform = "matrix3d("+tiltMatrix3d+")";
  // console.log(tiltMatrix);
  console.log(ect.style.transition);
  console.log(window.getComputedStyle(ect).getPropertyValue("transform"));
  // console.log(posX, posY);
}

card[0].addEventListener('mouseenter', mouseRelativePosition);

// card[0].addEventListener('mousemove', mouseRelativePosition, false);
// card[0].addEventListener('mousemove', function(e) {
//   console.log(e.pageX + "," + e.pageY);
// });

card[0].addEventListener('mouseleave', mouseRelativePosition);

// });
