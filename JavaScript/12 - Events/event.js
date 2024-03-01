// let btn = document.getElementById("btn");

// btn.addEventListener("click", show);

// btn.removeEventListener("click", show2);

// function change() {
//   var input = document.getElementById("name");
//   input.value = input.value.toLowerCase();
// }

// function show() {
//   alert("Hooray! I have been clicked");
// }
// function show2() {
//   alert("Hooray! I have been clicked show 2");
// }

// let btnPrev = document.getElementById("btnPrev");
let btnnext = document.getElementById("btnNext");
let img = document.getElementById("image");

var images = ["img/01.png", "img/02.jpg", "img/03.jpg"];

var num = 0;

btnnext.addEventListener("click", next);
// btnPrev.addEventListener("click", prev);

function next() {
  num++;
  if (num >= images.length) {
    num = 0;
  }
  img.src = images[num];
}

function prev() {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  img.src = images[num];
}
