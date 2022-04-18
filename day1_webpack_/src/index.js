import "./index.css";
import image from "./images.jpg"
//navbar
const root = document.getElementById("root");
const div1 = document.createElement("div");
div1.id = "div1";
const h1 = document.createElement("h1");
h1.innerText = "Create Notes";
h1.classList.add("redtext");
const img1 = document.createElement("img");
img1.src =image;
img1.id = "img1";
div1.append(img1, h1);
root.append(div1);

//notes

let notes = JSON.parse(localStorage.getItem("notes")) || [];
let add_btn = document.getElementById("add_btn");
add_btn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");
  notes.push(addTxt.value);
  localStorage.setItem("notes", JSON.stringify(notes));
  addTxt.value = "";
  showNotes();
});

// Function to show elements from localStorage
function showNotes() {
  document.getElementById("textdisplay").innerHTML = "";
  notes.forEach(function (el, index) {
    let div11 = document.createElement("div");
    div11.id = "div11";
    let div4 = document.createElement("div");
    div4.textContent = `Note ${index + 1}`;
    div4.id = "div4";
    let div2 = document.createElement("div");
    div2.textContent = el;
    div2.id = "div2";
    let div3 = document.createElement("button");
    div3.textContent = "Delete";
    div3.id = "div3";
    div3.addEventListener("click", function () {
      deleteNote(index);
    });
    div11.append(div4, div2, div3);
    document.getElementById("textdisplay").append(div11);
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}
