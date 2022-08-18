function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const InputFieldValue = parseFloat(inputField.value);
    inputField.value = '';
    return InputFieldValue;
}

function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValue = parseFloat(textElement.innerText);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}