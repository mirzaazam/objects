
const arrowFunction = (a, b) => {
    const result = (a + b) / 2;

    if (result % 2 === 0) {
        console.log('even',true);
    }
    else {
        console.log(false);
    }
}
arrowFunction(4, 4);