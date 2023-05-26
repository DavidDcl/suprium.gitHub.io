///////////////////// NAVBAR JS ///////////////////////////////////////

const sidenav = document.getElementById("mySidenav")
const openBtn = document.getElementById("openBtn")
const navig = document.getElementsByClassName("sidenav")
const burgerIcon = document.getElementsByClassName("burger-icon")
openBtn.addEventListener("click", () => {
  // quand on click sur le burger-menu
  sidenav.classList.add("active")
  if (sidenav.classList.contains("transitionOut"))
    sidenav.classList.remove("transitionOut")
})
document.addEventListener("click", (a) => {
  // quand on click n'importe ou sur l ecran
  if (
    !a.target.closest(".burger-icon") && // on précise  tout sauf burger icon
    sidenav.classList.contains("active")
  ) {
    sidenav.classList.remove("active")
    sidenav.classList.add("transitionOut")
  }
})

function removeActive(x) {
  if (x.matches) {
    sidenav.classList.remove("active")
    sidenav.classList.remove("transitionOut")
  }
}
const x = window.matchMedia("(min-width: 768px)")
removeActive(x)
x.addListener(removeActive)
//////////////////// NAVBAR JS ///////////////////////////////////////

///////////////////// DROPDONW AND FILTER JS ///////////////////////////////////////
filterSelection("all")
function filterSelection(c) {
  let x, i
  x = document.querySelectorAll(".filterDiv")
  if (c == "all") c == ""
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "showFilteredElements")
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "showFilteredElements")
  }
}

// montrer les elements selectioner

function addClass(element, name) {
  let i, arr1, arr2
  arr1 = element.className.split(" ")
  arr2 = name.split(" ")
  for (i = 0; i < arr2.length; i++)
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i]
    }
}
// cacher les elemens non selectione
function removeClass(element, name) {
  let i, arr1, arr2
  arr1 = element.className.split(" ")
  arr2 = name.split(" ")
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1)
    }
  }
  element.className = arr1.join(" ")
}
//ajout de la classe "active" sur le bouton actuel choisi

let dropDownContainer = document.querySelector("#myDropdown")

let choiceSelection = dropDownContainer.querySelectorAll("a")

choiceSelection.forEach(function (choice) {
  choice.addEventListener("click", function () {
    myDropDownMenu()
  })
})
// cache/montre le contenu du drop down menu
function myDropDownMenu() {
  document.getElementById("myDropdown").classList.toggle("show")
}

function filterFunction() {
  let input, filter, ul, li, a, i
  input = document.getElementById("myInput")
  filter = input.value.toUpperCase()
  div = document.getElementById("myDropdown")
  a = div.getElementsByTagName("a")
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = ""
    } else {
      a[i].style.display = "none"
    }
  }
}

///////////////////// DROPDONW AND FILTER JS ///////////////////////////////////////

///////////////////// Click pop up ////////////////////////////////////////////////

const main = document.querySelector(".main")
const footer = document.querySelector("#bottom")

//when the user click on Auguste picture
const clickAuguste = document.querySelector("#popupAuguste")

const popupAuguste = document.querySelector("#popupBakeryAuguste")

const closeButAuguste = document.querySelector("#close-btnAuguste")

const body = document.querySelector("body")

clickAuguste.addEventListener("click", function () {
  popupAuguste.style.display = "flex"
  main.classList.add("activePopup")
  body.classList.add("bodyActivePopup")
  footer.classList.add("activePopup")
})

closeButAuguste.addEventListener("click", function () {
  popupAuguste.style.display = "none"
  main.classList.remove("activePopup")
  body.classList.remove("bodyActivePopup")
  footer.classList.remove("activePopup")
})

//when the user click on Toque picture
const clickToque = document.querySelector("#popupToque")

const popupToque = document.querySelector("#popupBakeryToque")

const closeButToque = document.querySelector("#close-btnToque")

clickToque.addEventListener("click", function () {
  popupToque.style.display = "flex"
  main.classList.add("activePopup")
  body.classList.add("bodyActivePopup")
  footer.classList.add("activePopup")
})

closeButToque.addEventListener("click", function () {
  popupToque.style.display = "none"
  main.classList.remove("activePopup")
  body.classList.remove("bodyActivePopup")
  footer.classList.remove("activePopup")
})

//when the user click on Eric picture
const clickEric = document.querySelector("#popupEric")

const popupEric = document.querySelector("#popupBakeryEric")

const closeButEric = document.querySelector("#close-btnEric")

clickEric.addEventListener("click", function () {
  popupEric.style.display = "flex"
  main.classList.add("activePopup")
  body.classList.add("bodyActivePopup")
  footer.classList.add("activePopup")
})

closeButEric.addEventListener("click", function () {
  popupEric.style.display = "none"
  main.classList.remove("activePopup")
  body.classList.remove("bodyActivePopup")
  footer.classList.remove("activePopup")
})

//when the user click on Louis picture
const clickLouis = document.querySelector("#popupLouis")

const popupLouis = document.querySelector("#popupBakeryLouis")

const closeButLouis = document.querySelector("#close-btnLouis")

clickLouis.addEventListener("click", function () {
  popupLouis.style.display = "flex"
  main.classList.add("activePopup")
  body.classList.add("bodyActivePopup")
  footer.classList.add("activePopup")
})

closeButLouis.addEventListener("click", function () {
  popupLouis.style.display = "none"
  main.classList.remove("activePopup")
  body.classList.remove("bodyActivePopup")
  footer.classList.remove("activePopup")
})

//when the user click on Pain picture
const clickPain = document.querySelector("#popupPain")

const popupPain = document.querySelector("#popupBakeryPain")

const closeButPain = document.querySelector("#close-btnPain")

clickPain.addEventListener("click", function () {
  popupPain.style.display = "flex"
  main.classList.add("activePopup")
  body.classList.add("bodyActivePopup")
  footer.classList.add("activePopup")
})

closeButPain.addEventListener("click", function () {
  popupPain.style.display = "none"
  main.classList.remove("activePopup")
  body.classList.remove("bodyActivePopup")
  footer.classList.remove("activePopup")
})

//when the user click on Boulanger picture
const clickBoulanger = document.querySelector("#popupBoulanger")

const popupBoulanger = document.querySelector("#popupBakeryBoulanger")

const closeButBoulanger = document.querySelector("#close-btnBoulanger")

clickBoulanger.addEventListener("click", function () {
  popupBoulanger.style.display = "flex"
  main.classList.add("activePopup")
  body.classList.add("bodyActivePopup")
  footer.classList.add("activePopup")
})

closeButBoulanger.addEventListener("click", function () {
  popupBoulanger.style.display = "none"
  main.classList.remove("activePopup")
  body.classList.remove("bodyActivePopup")
  footer.classList.remove("activePopup")
})
///////////////////// Click pop up ////////////////////////////////////////////////
openBtn.addEventListener("click", () => {
  sidenav.classList.add("active")
  if (sidenav.classList.contains("transitionOut"))
    sidenav.classList.remove("transitionOut")
})
