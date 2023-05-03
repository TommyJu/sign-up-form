const body = document.querySelector('body');
const formControls = document.querySelector(".form-controls");

// Changes flex direction of form controls when screen height > width
window.addEventListener('resize', () => {
    if (body.offsetHeight > body.offsetWidth) {
        formControls.style.cssText = 'flex-direction: column';
    }
    else {
        formControls.style.cssText = 'flex-direction: row';
    }
})