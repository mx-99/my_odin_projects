document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const passwordInputValue = document.querySelector('input[name="password"]');
    const confirmPasswordInputValue = document.querySelector('input[name="confirm_passw"]');
    const error = document.querySelector('.error')

    form.addEventListener('submit', (event) => {
        if (passwordInputValue.value !== confirmPasswordInputValue.value) {
            event.preventDefault();
            error.textContent="*Passwords do not match"
        }
    });
});
