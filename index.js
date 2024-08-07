document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - 50,
                behavior: 'smooth'
            });
        });
    });

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (this.textContent === 'สั่งซื้อ') {
                window.location.href = 'form.html';
            } else {
                alert('สินค้าถูกเพิ่มในตะกร้าเรียบร้อยแล้ว');
            }
        });
    });
});

window.onload = function() {
    const loginBtn = document.getElementById('login-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // ตรวจสอบสถานะล็อกอิน
    if (localStorage.getItem('loggedIn') === 'true') {
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'inline';
    } else {
        loginBtn.style.display = 'inline';
        logoutBtn.style.display = 'none';
    }

    // ตั้งค่าปุ่มล็อกเอาต์
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('loggedIn');
        loginBtn.style.display = 'inline';
        logoutBtn.style.display = 'none';
    });
}
