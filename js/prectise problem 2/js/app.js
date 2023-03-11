
document.getElementById('send-all').addEventListener('click', () => {
    const inputField = document.getElementById('name');
    const inputFieldValue = inputField.value;
    inputField.value = '';
    localStorage.setItem('name', inputFieldValue)

})
document.getElementById('sent-email').addEventListener('click', () => {
    const secondinputField = document.getElementById('email');
    const secondinputFieldValue = secondinputField.value;
    secondinputField.value = '';
    localStorage.setItem('email', secondinputFieldValue)

})
document.getElementById('send-massage').addEventListener('click', () => {
    const thirdinputField = document.getElementById('massage');
    const thirdinputFieldValue = thirdinputField.value;
    thirdinputField.value = '';
    localStorage.setItem('massage', thirdinputFieldValue)

})
document.getElementById('dalete-item1').addEventListener('click', () => {
    const inputField = document.getElementById('name');
    const inputFieldValue = inputField.value;
    inputField.value = '';
    localStorage.removeItem('name', inputFieldValue)

})
document.getElementById('dalete-item2').addEventListener('click', () => {
    const secondinputField = document.getElementById('email');
    const secondinputFieldValue = secondinputField.value;
    secondinputField.value = '';
    localStorage.removeItem('email', secondinputFieldValue)

})
document.getElementById('dalete-item3').addEventListener('click', () => {
    const thirdinputField = document.getElementById('massage');
    const thirdinputFieldValue = thirdinputField.value;
    thirdinputField.value = '';
    localStorage.removeItem('massage', thirdinputFieldValue)

})
document.getElementById('reset').addEventListener('click', () => {
    localStorage.clear()
})
document.getElementById('send').addEventListener('click', () => {
    const inputField = document.getElementById('name').value;
    const secondinputField = document.getElementById('email').value;
    const thirdinputField = document.getElementById('massage').value;
    const myObj = {
        name : inputField,
        email : secondinputField,
        massage : thirdinputField
    }
    const string = JSON.stringify(myObj);

    localStorage.setItem("all value",string)
})
