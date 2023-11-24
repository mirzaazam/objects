
// 1. [] == true what is the answer true or false?
if ([] == true) {
    console.log(true)
}
else {
    console.log(false)
}

// 2. ture === ture 
if (true === true) {
    console.log(true)
}
else {
    console.log(false)
}

// 3. only number value is true other than false
const arrowFunction = (value) => {
    if (typeof value == 'number') {
        console.log(true)
    }
    else {
        console.log(false)
    }
}
arrowFunction('1');

// 4. 

let storeFalsyValue = true;
if (!storeFalsyValue) {
    console.log('Nothing to show!');
}
else {
    console.log('You are amazing!');
}

// 5.
const operation = (a, b, string) => {
    if (string === 'add') {
        const add = a + b;
        console.log('add is : ', add);
    }
    else if (string === 'subtruct') {
        const sub = a - b;
        console.log('Subtruct is : ', sub);
    }
    else if (string === 'multiply') {
        const multyple = a * b;
        console.log('Multiple is : ', multyple);
    }
    else if (string === 'divide') {
        const divide = a / b;
        console.log('Divide is : ', divide);
    }
    else if (string === 'modulus') {
        const modulus = a % b;
        console.log('Mudulus is : ', modulus);
    }
    else{
        console.log('Invalid Operation')
    }
}
operation(8, 2, 'modulus');