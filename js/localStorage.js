
const addToLocalstorage = () => {
    const idInput = document.getElementById('localstorage-Id');
    const id = idInput.value;
    const valueInput = document.getElementById('localstorage-value');
    const value = valueInput.value;

    if (id && value) {
        localStorage.setItem(id, value);
    }

    idInput.value = '';
    valueInput.value = '';
}

// add an object to localstorage using json.stringify
const watch = {type: 'digital', color: 'black', price: 1500};
localStorage.setItem('watch', JSON.stringify(watch));
//get item using parse
const afterWatch = localStorage.getItem('watch');
const afterWatchToObject = JSON.parse(afterWatch);
console.log(afterWatchToObject);

// add an array using json.stringify
localStorage.setItem('arr', JSON.stringify([12, 12, 23, 42, 45]));
//get an array 
const arr = localStorage.getItem('arr');
const array = JSON.parse(arr);
console.log(array);