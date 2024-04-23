document.addEventListener('DOMContentLoaded', function() {
    // Select the spinner wrapper element
    const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

    // Hide the spinner with a smooth fade-out transition
    spinnerWrapperEl.style.opacity = '0';

    // After a delay, set display to 'none'
    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 500); // Adjust the delay as needed
});