
const pial = {
    roll: 8,
    name: 'pial',
    ismale: true,
    array: [43, 34, 42, 'hey', 'hello'],
    object: {
        name: 'polash',
        age: 34,
        isFemale: false,
        array2: ['hasim', 'raja', 'rashed'],
        object2: {
            name: 'priya',
            age: 21
        }
    },
    myfunction: function(){
        return this.name = 'pial change name';
    },
};



const divContainer = document.getElementById('div-container');
divContainer.innerHTML = `
    <p>First object name is : <code>${pial.name}</code></p>
    <p>Roll:<code>${pial.roll}</code></p>
    <p>Is Male:<code>${pial.ismale}</code></p>
    <p>array:<code>${pial.array}</code></p>
    <p>Object:<code>${pial.object}</code></p>

    <ul>
        <li>${pial.object.array2[2]}</li>
        <li>${pial.object.object2['name']}</li>
        <li>${pial.object.object2.age}</li>
    </ul>
`;