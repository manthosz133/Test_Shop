document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

  
    let username = document.getElementById('user').value;
    let password = document.getElementById('pass').value;
    let confirmPassword = document.getElementById('confirmpass').value;
    let email = document.getElementById('mail').value;

   
    if (password !== confirmPassword) {
        alert('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน');
        return;
    }

   
    if (username === '' || password === '' || email === '') {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    alert('สมัครสมาชิกสำเร็จแล้ว');

    window.location.href = 'login.html'; 
});
