let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".icon i");

searchBox.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    searchBox.classList.replace("bx-bell", "bx-x"); // Changing to close icon when search is open
  } else {
    searchBox.classList.replace("bx-x", "bx-bell"); // Changing back to bell icon when search is closed
  }
});


// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.left = "0";
}
menuCloseBtn.onclick = function () {
  navLinks.style.left = "-100%";
}


// Select the language change icon
let languageIcon = document.querySelector(".navbar .bx-globe");

// Define a variable to keep track of the current language
let currentLanguage = "english"; // Default language is English

// Functionality for changing language
languageIcon.addEventListener("click", () => {
  // Toggle between English and Thai languages
  if (currentLanguage === "english") {
    // Switch to Thai
    currentLanguage = "thai";
    // Implement logic to change content to Thai language
    console.log("Switched to Thai language");
    // Example: Change text content to Thai
    document.querySelectorAll(".lang-en").forEach(element => {
      element.style.display = "none";
    });
    document.querySelectorAll(".lang-th").forEach(element => {
      element.style.display = "block";
    });
  } else {
    // Switch to English
    currentLanguage = "english";
    // Implement logic to change content to English language
    console.log("Switched to English language");
    // Example: Change text content to English
    document.querySelectorAll(".lang-th").forEach(element => {
      element.style.display = "none";
    });
    document.querySelectorAll(".lang-en").forEach(element => {
      element.style.display = "block";
    });
  }
});



// ----------------------------------


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
}

document.addEventListener("DOMContentLoaded", function () {
  // เรียกใช้ฟังก์ชัน updateClock() เพื่อให้เวลาแสดงเป็น real-time
  updateClock();
  // กำหนดให้ฟังก์ชัน updateClock() ทำงานทุกๆ 1 วินาที
  setInterval(updateClock, 1000);
});
function updateClock() {
  // สร้างวันที่และเวลาในรูปแบบข้อความ
  var today = new Date();
  var formattedDate = today.toLocaleDateString();
  var formattedTime = today.toLocaleTimeString();

  // เข้าถึง HTML element ที่มี id เป็น "currentDate-en" และ "currentDate-th"
  var dateElementEn = document.getElementById("currentDate-en");
  var dateElementTh = document.getElementById("currentDate-th");

  // กำหนดข้อความใน element เป็นวันที่และเวลาปัจจุบัน
  dateElementEn.textContent = "Date: " + formattedDate + " | Time: " + formattedTime;
  dateElementTh.textContent = "วันที่: " + formattedDate + " | เวลา: " + formattedTime;
}


function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  let ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}
