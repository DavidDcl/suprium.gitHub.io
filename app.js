///////////////////// NAVBAR JS ///////////////////////////////////////

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
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

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

///////////////////// NAVBAR JS ///////////////////////////////////////

///////////////////// DROPDONW AND FILTER JS ///////////////////////////////////////
filterSelection("all");
function filterSelection(c) {
  let x, i;
  x = document.querySelectorAll(".filterDiv");
  if (c == "all") c == "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "showFilteredElements");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "showFilteredElements");
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
//ajout de la classe "active" sur le bouton actuel choisi

let dropDownContainer = document.querySelector("#myDropdown");

let choiceSelection = dropDownContainer.querySelectorAll("a");

choiceSelection.forEach(function (choice) {
  choice.addEventListener("click", function () {
    myDropDownMenu();
  });
});

let current = document.querySelectorAll(".active");
current.forEach(function (element) {
  element.className = element.className.replace("active", "");
});

function myDropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

///////////////////// DROPDONW AND FILTER JS ///////////////////////////////////////
