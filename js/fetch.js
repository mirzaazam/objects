
// fetch('')
// .then(res => res.json())
// .then(data => console.log(data));


let cars = [
    {
        color: "purple",
        type: "minivan",
        registration: new Date('2017-01-03'),
        capacity: 7
    },
    {
        color: "red",
        type: "station wagon",
        registration: new Date('2018-03-03'),
        capacity: 5
    },
    {
        color: "black",
        type: "station wagon",
        registration: new Date('2018-03-03'),
        capacity: 5
    },

]

const arrNew = {
    name: 'nohi',
    age: 24,
    complexit: 'fair'
};
const newArr = [...cars, arrNew];

const remaning = cars.filter(item => item.color !== 'black')
console.log(remaning)