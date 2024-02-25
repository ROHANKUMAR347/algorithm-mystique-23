function checkInput() {
    var emailValue = document.getElementById('email').value;
    var passwordValue = document.getElementById('password').value;
    var login = document.getElementById('login');

    if (emailValue.trim() !== '' || passwordValue.trim() !== '') {
       
        login.disabled = false;
        login.style.backgroundColor = '#42a2a2';
    } else {
        login.disabled = true;
        login.style.backgroundColor = '#989898';
    }
}

function togglePasswordVisibility(icon) {
    var passwordInput = document.getElementById('password');
    var openEyeIcon = document.getElementById('openEye');
    var closedEyeIcon = document.getElementById('closedEye');

    // Toggle password input visibility
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        openEyeIcon.style.display = 'none';
        closedEyeIcon.style.display = 'block';
    } else {
        passwordInput.type = 'password';
        openEyeIcon.style.display = 'block';
        closedEyeIcon.style.display = 'none';
    }
}


let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}