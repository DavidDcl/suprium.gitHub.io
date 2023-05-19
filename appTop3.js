///////////////////// NAVBAR JS ///////////////////////////////////////

const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
openBtn.onclick = closeOrOpenNav;
function closeOrOpenNav() {
  if (sidenav.classList.contains("active")) {
    sidenav.classList.remove("active");
    sidenav.classList.add("transitionOut");
  } else {
    sidenav.classList.add("active");
    sidenav.classList.remove("transitionOut");
  }
}
///////////////////// NAVBAR JS ///////////////////////////////////////

///////////////////// Click pop up ////////////////////////////////////////////////

//when the user click on Auguste picture
const clickAuguste = document.querySelector("#popupAuguste");

const popupAuguste = document.querySelector("#popupBakeryAuguste");

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

//when the user click on Toque picture
const clickToque = document.querySelector("#popupToque");

const popupToque = document.querySelector("#popupBakeryToque");

const closeButToque = document.querySelector("#close-btnToque");

clickToque.addEventListener("click", function () {
  popupToque.style.display = "flex";
  main.classList.add("bodyActivePopup");
});

closeButToque.addEventListener("click", function () {
  popupToque.style.display = "none";
  main.classList.remove("bodyActivePopup");
});

//when the user click on Eric picture
const clickEric = document.querySelector("#popupEric");

const popupEric = document.querySelector("#popupBakeryEric");

const closeButEric = document.querySelector("#close-btnEric");

clickEric.addEventListener("click", function () {
  popupEric.style.display = "flex";
  main.classList.add("bodyActivePopup");
});

closeButEric.addEventListener("click", function () {
  popupEric.style.display = "none";
  main.classList.remove("bodyActivePopup");
});

///////////////////// Click pop up ////////////////////////////////////////////////
