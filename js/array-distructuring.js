
const arr = [20, 56, 67, 43, 23];
const  [first, second, third] = arr;
console.log (first, second, third);


// Object distructiong
const object = {
    name: 'leptop',
    brand: 'hp',
    price: 54000,
    color: 'silver',
    quality: {
        processor: 'intel',
        core: 'i5',
        gen: '8th'
    }
}

const {processor, core, gen} = object.quality
const {price} = object;
console.log(processor, core, gen, price);

