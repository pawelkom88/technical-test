import {
  trapFocus,
  openMobileMenu,
  removeActiveClasses,
  addActiveClasses,
  closeModalByKey,
  showCookieAlert,
} from "./helpers";

import {
  closeCookieBtn,
  closeBtn,
  closeBtns,
  viewJobsBtn,
  hamburger,
  cookieBtns,
  overlay,
} from "./constants";

import moveToNextSlide from "./carousel";

// open mobile menu by clicking on hamburger icon
hamburger.addEventListener("click", () => {
  openMobileMenu();

  // set aria-expanded conditionally
  if (hamburger.getAttribute("aria-expanded") === "false") {
    hamburger.setAttribute("aria-expanded", true);
  } else {
    hamburger.setAttribute("aria-expanded", false);
  }
});

// show cookie message
document.addEventListener("DOMContentLoaded", showCookieAlert);

// trap focus in cookie alert
trapFocus();

// carousel slides
setInterval(moveToNextSlide, 7000);

// open modal
viewJobsBtn.forEach(btn => btn.addEventListener("click", addActiveClasses));

// close modal after clicking on overlay
overlay.addEventListener("click", removeActiveClasses);

// close modal/cookie alert after clicking close button
closeBtns.forEach(btn => btn.addEventListener("click", removeActiveClasses));

// close modal using ESC key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") removeActiveClasses();
});

// close modal by pressing ENTER key when button is focused
closeModalByKey(closeBtn);
closeModalByKey(closeCookieBtn);

// close cookie alert
cookieBtns.forEach(btn => btn.addEventListener("click", removeActiveClasses));

// set date in copyright section
const footerDate = document.querySelector(".year");
const year = new Date().getFullYear();
footerDate.innerHTML = year;
