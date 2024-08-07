function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === null || username === "") {
        alert("กรุณากรอก Username");
        return false;
    }

    if (password === null || password === "") {
        alert("กรุณากรอก Password");
        return false;
    }

    alert("ยินดีต้อนรับสู่ระบบ");

    // ตั้งค่าสถานะการล็อกอิน
    localStorage.setItem('loggedIn', 'true');

    // เปลี่ยนไปที่หน้า index.html
    window.location.href = "index.html";
    return false; // เพื่อป้องกันการส่งฟอร์มแบบธรรมดา
}
