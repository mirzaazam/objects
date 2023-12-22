
const obj = [
    {name: 'rifat', class: 9, roll: 1, group: 'science'},
    {name: 'atikul', class: 7, roll: 1, group: 'generel'},
    {name: 'abdur rohim', class: 8, roll: 1, group: 'generel'},
    {name: 'abdullah', class: 6, roll: 1, group: 'generel'},
    {name: 'rakib', class: 5, roll: 1, group: 'primary'},
    {name: 'rofiq', class: 3, roll: 1, group: 'primary'}
];

const newObj = {name: 'sifatUllah', class: 12, roll: 4, group: 'commarce'};

const obj2 = [...obj, newObj];

// filter kore 1 ta ber kore fela hoyeche.
const filter = obj2.filter(item => item.name !== 'atikul') ;
console.log(filter);