const body = document.querySelector('body');
const formControls = document.querySelector(".form-controls");
const pass = document.querySelector("#pass");
const confirmPass = document.querySelector('#confirm-pass');
const form = document.querySelector('.basic-form');
const legend = document.querySelector("#legend");

// Changes flex direction of form controls when screen height > width
window.addEventListener('resize', () => {
    if (body.offsetHeight > body.offsetWidth) {
        formControls.style.cssText = 'flex-direction: column';
    }
    else {
        formControls.style.cssText = 'flex-direction: row';
    }
})

function validateForm() {
    if (pass.value === confirmPass.value) {
        legend.textContent = "Account created successfully!";
        pass.classList.remove("error");
        confirmPass.classList.remove("error");
        
    }
    else {
        legend.textContent = "Passwords do not match";
        pass.classList.add("error");
        confirmPass.classList.add("error");
    }

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});