// ajouter ou retirer la classe "show" de chaque element en fonction de ca selection ou pas
const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  sidenav.classList.remove("active");
}

filterSelection("caterer");
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c == "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}
// montrer les elements selectioner
function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++)
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
}
// cacher les elemens non selectione
function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
// ajout de la classe "active" sur le bouton actuel choisi
/* let buttonContainer = document.getElementById("button-container");
let btns = buttonContainer.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", " ");
    this.className += " active";
  });
}*/

let buttonContainer = document.getElementsByClassName("button-container");
let btns = Array.from(buttonContainer[0].getElementsByClassName("btn"));

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}

//when the user click on Auguste picture
const clickAuguste = document.querySelector("#popupAuguste");

const popupAuguste = document.querySelector("#popupBakery1");

const main = document.querySelector(".main");

const closeButAuguste = document.querySelector("#close-btnAuguste");

clickAuguste.addEventListener("click", function () {
  popupAuguste.style.display = "flex";
  main.classList.add("bodyActivePopup");
});

closeButAuguste.addEventListener("click", function () {
  popupAuguste.style.display = "none";
  main.classList.remove("bodyActivePopup");
});
