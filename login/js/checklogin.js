document.addEventListener("DOMContentLoaded", function () {
  // เช่น เพิ่ม event listener สำหรับปุ่ม Login
  const loginButton = document.querySelector('.btn-primary');
  loginButton.addEventListener('click', function (event) {
    event.preventDefault(); // ป้องกันการทำงานของ form submit โดยปกติ

    // ดึงค่าจาก input fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value.toLowerCase();


    // ตรวจสอบค่าที่กรอกเข้ามา
    if (username.trim() === '' || password.trim() === '' || role.trim() === '') {
      alert("Please fill in all fields");
      return;
    }

    if (username.endsWith('@student.mahidol.edu') && role === 'student') {

      window.location.href = './pdpa.html';
    }
    else if (username.endsWith('@mahidol.edu') && role === 'admin') {
      login();
    }
    else if (username != username.endsWith('@student.mahidol.edu') && role === 'student') {

      alert('Please ( student.mahidol.edu )');
    }
    else if (username != username.endsWith('@mahidol.edu') && role === 'admin') {

      alert('Please ( mahidol.edu )');
    }
    else {
    }
  });
});


async function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(username, password);

  try {
    const response = await fetch(`http://localhost:8000/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      window.location.href = '../AdminPage.html';
    } else {
      console.error('Failed to Login:', response.statusText);
      alert('Failed to Login');
    }
  } catch (error) {
    console.error('Error changing status:', error);
    alert('Failed to Login');
  }


}