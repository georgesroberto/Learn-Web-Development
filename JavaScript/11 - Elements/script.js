var imgEl = document.getElementById("image1");

// imgEl.src = "image.png";

let homEl = document.getElementById("home");

// homEl.removeChild(imgEl);

// imgEl.parentNode.removeChild(imgEl);

// CREATE NEW ELS

var newP = document.createTextNode("Here is my new text");

let main = document.getElementById("main");

let contactEl = document.createElement("div");

main.appendChild(contactEl);

contactEl.innerHTML = "My new div";

contactEl.style.backgroundColor = "red";
contactEl.style.padding = "10px";
contactEl.style.marginTop = "20px";
contactEl.style.marginBottom = "20px";

// REPLACING ELEMENTS

let img2 = document.createElement("img");
img2.src = "image.png";
img2.style.width = "100%";

main.replaceChild(img2, contactEl);

// END REPLACING ELEMNTS

let aboutDiv = document.createElement("div");
main.appendChild(aboutDiv);
aboutDiv.style.backgroundColor = "rgb(15, 4, 232)";
aboutDiv.style.backgroundColor = "azure";
aboutDiv.style.marginTop = "20px";
aboutDiv.style.marginBottom = "20px";
aboutDiv.style.padding = "20px";

let h2 = document.createElement("h2");
h2.innerHTML = "About us";
aboutDiv.appendChild(h2);

let h3 = document.createElement("h3");
h3.innerHTML = "What is Lorem Ipsum?";
h3.style.color = "red";
aboutDiv.appendChild(h3);

let p = document.createTextNode(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
);

aboutDiv.appendChild(p);
