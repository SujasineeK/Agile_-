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
  // สร้างวันที่และเวลาในรูปแบบข้อความ
  var today = new Date();
  var formattedDate = today.toLocaleDateString();
  var formattedTime = today.toLocaleTimeString();

  // เข้าถึง HTML element ที่มี id เป็น "currentDate"
  var dateElement = document.getElementById("currentDate");

  // กำหนดข้อความใน element เป็นวันที่และเวลาที่สร้าง
  dateElement.textContent = "Date: " + formattedDate + " | Time: " + formattedTime;
});

document.addEventListener("DOMContentLoaded", function () {
  // สร้างวันที่และเวลาในรูปแบบข้อความ
  var today = new Date();
  var formattedDate = today.toLocaleDateString();
  var formattedTime = today.toLocaleTimeString();

  // เข้าถึง HTML element ที่มี id เป็น "currentDate"
  var dateElement = document.getElementById("currentDate-th");

  // กำหนดข้อความใน element เป็นวันที่และเวลาที่สร้าง
  dateElement.textContent = "วันที่: " + formattedDate + " | เวลา: " + formattedTime;
});

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form');
  form.addEventListener('submit', function (event) {
      // ยกเลิกการส่งฟอร์มเพื่อตรวจสอบข้อมูลก่อนการส่ง
      event.preventDefault();

      // เพิ่มเงื่อนไขตรวจสอบข้อมูลในฟอร์ม
      const name = form.elements['name'].value.trim();
      const studentId = form.elements['student_id'].value.trim();
      const mobile = form.elements['Mobile'].value.trim();
      const currentTrack = form.elements['current_track'].value;
      const newTrack = form.elements['new_track'].value;
      const reason = form.elements['reason'].value.trim();

      // เงื่อนไขตรวจสอบข้อมูล
      if (name === '' || studentId === '' || mobile === '' || currentTrack === '' || newTrack === '' || reason === '') {
          alert('Please fill out all fields.');
          return;
      }
      // ถ้าข้อมูลถูกต้อง ถามผู้ใช้ด้วย confirm ก่อนการส่งฟอร์ม
      const confirmation = confirm('Are you sure you want to submit the form?');

      // ถ้าผู้ใช้กด OK ให้ส่งฟอร์ม
      if (confirmation) {
          form.submit();
          alert("Submit Successfully!")
      } else {
      // ถ้าผู้ใช้กด Cancel ไม่ต้องทำอะไร
          return ;
      }
  });
});

function onlyNumberKey(evt) {
  // Only ASCII character in that range allowed
  let ASCIICode = (evt.which) ? evt.which : evt.keyCode
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
      return false;
  return true;
}
