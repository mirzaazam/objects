
const addToLocalstorage = () => {
    const idInput = document.getElementById('localstorage-Id');
    const id = idInput.value;
    const valueInput = document.getElementById('localstorage-value');
    const value = valueInput.value;

    localStorage.setItem(id, value);
    idInput.value = '';
    valueInput.value = '';
}