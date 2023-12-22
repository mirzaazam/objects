
const obj = [
    { name: 'rifat', class: 9, roll: 1, group: 'science' },
    { name: 'atikul', class: 7, roll: 1, group: 'generel' },
    { name: 'abdur rohim', class: 8, roll: 1, group: 'generel' },
    { name: 'abdullah', class: 6, roll: 1, group: 'generel' },
    { name: 'rakib', class: 5, roll: 1, group: 'primary' },
    { name: 'rofiq', class: 3, roll: 1, group: 'primary' }
];

const newObj = { name: 'sifatUllah', class: 12, roll: 4, group: 'commarce' };

const obj2 = [...obj, newObj];

// filter kore 1 ta ber kore fela hoyeche.
const filter = obj2.filter(item => item.name !== 'atikul');
// console.log(filter);


/*truly and falsey
    1. 'string', 5, true, {}, [];
    2. 0, null, undefind, '', false      
*/

let myValue = 66;
if (myValue) {
    console.log(myValue = 70); // this will be 70 coz value is truly 
}
else {
    console.log(myValue = 60);
}

//falsey cheker
if (!myValue) { // !myValue means false check
    console.log(myValue = 70);  
}
else {
    console.log('Falsy so print false value', myValue = -60); // this will be 70 coz value is falsey
}