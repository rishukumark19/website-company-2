// menu logic
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn) {
  menuBtn.onclick = function () {
    navMenu.classList.toggle("show");
  };
}

// year logic
const yearBox = document.querySelector(".year");
if (yearBox) {
  yearBox.textContent = new Date().getFullYear();
}

// form validation
// clicking outside blur part
const nameBox = document.querySelector("#full-name");
const emailBox = document.querySelector("#email");
const phoneBox = document.querySelector("#phone");

if (nameBox) {
  // name box
  nameBox.onblur = function () {
    if (nameBox.value.length < 3) {
      document.querySelector("#name-error").style.display = "block";
    } else {
      document.querySelector("#name-error").style.display = "none";
    }
  };

  //Email box
  emailBox.onblur = function () {
    if (emailBox.value.includes("@") && emailBox.value.includes(".com")) {
      document.querySelector("#email-error").style.display = "none";
    } else {
      document.querySelector("#email-error").style.display = "block";
    }
  };

  // outside Phone box
  phoneBox.onblur = function () {
    // take only digits
    const numericValue = phoneBox.value.replace(/\D/g, "");
    phoneBox.value = numericValue; // update with digits only

    if (numericValue.length === 10) {
      document.querySelector("#phone-error").style.display = "none";
    } else {
      document.querySelector("#phone-error").style.display = "block";
    }
  };
}

// button click
const myForm = document.querySelector(".contact-form");
if (myForm) {
  myForm.onsubmit = function (e) {
    e.preventDefault();

    // trigger all , checks aswell
    nameBox.onblur();
    emailBox.onblur();
    phoneBox.onblur();
  };
}
