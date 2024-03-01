var timer = setInterval(move, 200);

var position = 0;

var box = document.getElementById("box");

function move() {
  if (position >= 200) {
    clearInterval(timer);
  } else {
    position += 5;
    box.style.left = position + "px";
  }

  if (position >= 200) {
    clearInterval(timer);
  } else {
    position += 5;
    box.style.top = position + "px";
  }
}
