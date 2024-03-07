// ANIMATE JS

setInterval(move, 500);

let box = document.getElementById("box");

var position = 0;

// width:275px -> Container
// width:75px -> Box
// space remains -> 200px

function move() {
  if (position >= 200) {
    position = -20;
  } else {
    position += 20;
    box.style.left = position + `px`;
    box.style.top = position + `px`;
  }
}
