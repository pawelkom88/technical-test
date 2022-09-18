import {overlay, closeBtn, closeCookieBtn} from "./constants";

const body = document.querySelector("body");
const cookieAlert = document.querySelector(".cookie-alert");
const modal = document.querySelector(".modal");
const navMobile = document.querySelector(".nav-mobile-container");

export function removeActiveClasses() {
  modal.classList.remove("modal-active");
  overlay.classList.remove("modal-active");
  body.classList.remove("overflow");
  cookieAlert.classList.remove("cookie-active");
}

export function addActiveClasses() {
  modal.classList.add("modal-active");
  overlay.classList.add("modal-active");
  body.classList.add("overflow");
  closeBtn.focus();
}

export function closeModalByKey(element) {
  document.addEventListener(
    "focusin",
    () => {
      if (document.activeElement === element) {
        element.addEventListener("keydown", e => {
          if (e.key === "Enter") {
            removeActiveClasses();
          }
        });
      }
    },
    true
  );
}

export function openMobileMenu() {
  const lines = document.querySelectorAll(".line");
  navMobile.classList.toggle("menu-js");

  lines.forEach(line => line.classList.toggle("active"));
  document.querySelector(".hero").style.backgroundImage =
    "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));"; // ????????????????????
}

export function showCookieAlert() {
  setTimeout(() => {
    const cookieAlert = document.querySelector(".cookie-alert");
    cookieAlert.classList.add("cookie-active");
    cookieAlert.style.animation = "fadeIn 1s linear";
    overlay.classList.add("modal-active");
    closeCookieBtn.focus();
  }, 5000);
}

export function trapFocus() {
  const firstEl = closeCookieBtn;
  const lastEl = document.querySelector(".btn-focus-last");

  modal.addEventListener("keydown", e => {
    const isTabPressed = e.key === "Tab";
    const hasFocus = document.activeElement;

    // guard close
    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      if (hasFocus === firstEl) {
        lastEl.focus();
        e.preventDefault();
      }
    } else {
      if (hasFocus === lastEl) {
        firstEl.focus();
        e.preventDefault();
      }
    }
  });
}
