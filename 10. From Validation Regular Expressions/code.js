document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('phone').addEventListener('blur',validatePhone);

function validate(element , re){
    if(!re.test(element.value)){
        element.classList.add('is-invalid');
    }
    else{
        element.classList.remove('is-invalid');
    }
}

function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-z \.]{2,30}$/;
    validate(name,re);
}

function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{6}$/;
    validate(zip,re);
}

function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    validate(email,re);
}

function validatePhone(){
    const phone = document.getElementById('phone');
    const re = /^[0-9]{10}$/;
    validate(phone,re);
}