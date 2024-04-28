const inputField = document.getElementsByClassName('inputField')
const submitButton = document.getElementsByClassName('submitButton')
inputField.addEventListener('input', function() {
    if (inputField.value.trim() !== '') {
        submitButton.disabled = false;
    } else {
        submitButton.disabled = true;
    }
})
 
export { inputField, submitButton }