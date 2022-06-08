// get Element from HTML 
let nameError = document.getElementById('name-error');
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

// Name Validation 

function validateName() {
    let userName = document.getElementById('user-name').value;
    if (userName.length < 6 || !userName.match(/^[A-Za-z]*[1-9]*$/)) {
        nameError.innerHTML = "Write Valid Name";
        return false;
    } else {
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true
    }

}
// Phone Number Validation 

function validatePhone() {
    let phoneNumber = document.getElementById("user-phone").value;
    if (phoneNumber.length < 11 || !phoneNumber.match(/^(01)(0|1|2|5)\d{8}$/)) {
        phoneError.innerHTML = "Enter Valid Number";
        return false
    } else {
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true
    }
}
// Email Validation 
function validateEmail() {
    let userEmail = document.getElementById('user-email').value
    const emailRegx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!userEmail.match(emailRegx)) {
        emailError.innerHTML = " Enter Valid Email ";
        return false
    } else {
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
        return true
    }
}
// Message Validation  
function validateMessage() {
    let userMessage = document.getElementById('user-message').value;
    let required = 20;
    let left = required - userMessage.length

    if (left > 0) {
        messageError.innerHTML = `${left} more charachters required`
        return false;
    } else {
        messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true
    }
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = ' Please fill the Required Fields '
        setTimeout(() => {
            submitError.style.display = "none"
        }, 1000)

        return false
    }
}