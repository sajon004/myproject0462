const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input,message){
    const formControl = input.parentElement;
    formControl.className= 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
        const formControl = input.parentElement;
    formControl.className= 'form-control success';
}

function isValidUsername(username) {
    const re = /^[a-zA-Z\-]+$/;
    return re.test(String(username).toLowerCase());
}

function isValidEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function isValidPassword(password){
    const re = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    return re.test(String(password).toLowerCase());
}


form.addEventListener('submit',function(e){
    e.preventDefault();
    if(username.value === ''){
    showError(username,'username is required');
    }
    else if(!isValidUsername(username.value)){
        showError(username,'username is not valid');
    }
    else{
    showSuccess(username);
    }

    if(email.value === ''){
        showError(email,'email is required');
    }
    else if(!isValidEmail(email.value)){
        showError(email,'email is not valid');
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password,'password is required');
    }
    else if(!isValidPassword(password.value)){
        showError(password,'password is not valid');
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2,'Confirmation is required');
    }
    else if(password.value!=password2.value){
        showError(password2,'password do not match');
    }
    else{
        showSuccess(password2);
    }

})