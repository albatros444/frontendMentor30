import { formatNumber, handleProgBar } from "./utils.mjs";

const closeMainModalButton = document.querySelector(".closeModalIcon");
const mainModalBackground = document.querySelector(".mainModalDarkBgr");
const thanksModaldarkBackgr = document.querySelector(".thanksModaldarkBackgr");
const body = document.querySelector("body");
const backProjButton = document.querySelector(".backProjButton");
const mainModal = document.querySelector(".mainModal");
const radioButtons = document.querySelectorAll(".radio");
const backed = document.querySelector(".backedCount");
const backersCount = document.querySelector(".backersCount");
const gotItButton = document.querySelector(".gotItButton");
const bookmarkButton = document.querySelector(".bookmarkButton");
const bookmarkButtonText = document.querySelector(".bbText");
const beStandCardCount = document.querySelector(".BEstandCardCount");
const bambooStandCartCount = document.querySelector(".bambooStandCardCount");
const beStandCount = document.querySelector(".beStandCount");
const bambooStandCount = document.querySelector(".bambooStandCount");

///////////pledge inputs and buttons////////
const min0input = document.querySelector(".pledgeMin0input");
const min0button = document.querySelector(".pledgeMin0button");
const min25input = document.querySelector(".pledgeMin25input");
const min25button = document.querySelector(".pledgeMin25button");
const min75input = document.querySelector(".pledgeMin75input");
const min75button = document.querySelector(".pledgeMin75button");
//////////////////////

////variables/////////
let backedCount = 89914;
let backers = 5007;
const backersPlus1 = backers + 1;
let bambooStands = 101;
let BEstands = 64;

if (localStorage.getItem("bookmarked") === "true") {
  bookmarkButtonText.innerText = "Bookmarked";
  bookmarkButton.classList.add("bookmarked");
}

backed.innerText = formatNumber(backedCount);
backersCount.innerText = formatNumber(backers);
handleProgBar(backedCount);
beStandCount.innerText = BEstands;
beStandCardCount.innerText = BEstands;
bambooStandCount.innerText = bambooStands;
bambooStandCartCount.innerText = bambooStands;

//////show main modal//////
backProjButton.addEventListener("click", () => {
  mainModalBackground.style.display = "flex";
  body.style.overflow = "hidden";
});
/////close main modal//////
const closeModal = () => {
  mainModalBackground.style.display = "none";
  body.style.overflow = "auto";
  radioButtons.forEach((radio) => {
    radio.checked = false;
  });
  mainModal.reset();
};
closeMainModalButton.addEventListener("click", () => {
  closeModal();
});
//////close on click on background
mainModalBackground.addEventListener("click", () => {
  closeModal();
});
mainModal.addEventListener("click", (e) => {
  e.stopPropagation();
});
/////////handle pledge buttons ////
min0button.addEventListener("click", (e) => {
  e.preventDefault();
  if (Number.isInteger(Number(min0input.value))) {
    if (Number(min0input.value) === 0) {
      closeModal();
      return;
    }
    backedCount += Number(min0input.value);
  }
  backed.innerText = formatNumber(backedCount);
  handleProgBar(backedCount);
  backersCount.innerText = formatNumber(backersPlus1);
  closeModal();
  thanksModaldarkBackgr.style.display = "flex";
});

min25button.addEventListener("click", (e) => {
  e.preventDefault();
  if (Number.isInteger(Number(min25input.value))) {
    if (Number(min25input.value) === 0) {
      closeModal();
      return;
    }
    backedCount += Number(min25input.value);
    bambooStands--;
    bambooStandCount.innerText = bambooStands;
    bambooStandCartCount.innerText = bambooStands;
  }
  backed.innerText = formatNumber(backedCount);
  handleProgBar(backedCount);
  backersCount.innerText = formatNumber(backersPlus1);
  closeModal();
  thanksModaldarkBackgr.style.display = "flex";
});

min75button.addEventListener("click", (e) => {
  e.preventDefault();
  if (Number.isInteger(Number(min75input.value))) {
    if (Number(min75input.value) === 0) {
      closeModal();
      return;
    }
    backedCount += Number(min75input.value);
    BEstands--;
    beStandCount.innerText = BEstands;
    beStandCardCount.innerText = BEstands;
  }
  backed.innerText = formatNumber(backedCount);
  handleProgBar(backedCount);
  backersCount.innerText = formatNumber(backersPlus1);
  closeModal();
  thanksModaldarkBackgr.style.display = "flex";
});

gotItButton.addEventListener("click", () => {
  thanksModaldarkBackgr.style.display = "none";
});

bookmarkButton.addEventListener("click", () => {
  if (bookmarkButtonText.innerText === "Bookmarked") {
    bookmarkButton.classList.remove("bookmarked");
    bookmarkButtonText.innerText = "Bookmark";
    localStorage.setItem("bookmarked", false);
  } else {
    bookmarkButton.classList.add("bookmarked");
    bookmarkButtonText.innerText = "Bookmarked";
    localStorage.setItem("bookmarked", true);
  }
});
